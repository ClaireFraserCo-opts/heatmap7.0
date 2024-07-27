// src/utils/dataProcessing.js

import { fetchJSON } from './fetchData';
import { calculatePercentile } from './heatmapUtils';
import { calculateDurations } from './durationUtils';
import { getColorForCell } from './colorShades';

/**
 * Processes raw JSON data based on its structure.
 * @param {Object} jsonData - The JSON data to process.
 * @returns {Object} - Processed data including sessionData, wordFrequencies, and config.
 */
function processJsonData(jsonData) {
    let sessionData = {};
    let wordFrequencies = [];
    let config = { summaryLength: 500, frequentWords: 10, persona: 'patient' };

    if (jsonData.utterances && jsonData.words) {
        // Type 1 JSON format (tx files)
        sessionData.utterances = jsonData.utterances;
        wordFrequencies = jsonData.words;
    } else if (jsonData.utterances && jsonData.summary) {
        // Type 2 JSON format (pretty files)
        sessionData.utterances = jsonData.utterances;
        wordFrequencies = jsonData.words.map(word => ({
            text: word.text,
            start: word.start,
            end: word.end,
            confidence: word.confidence,
            speaker: word.speaker,
        }));
    } else {
        throw new Error('Unknown JSON format');
    }

    return { sessionData, wordFrequencies, config };
}

/**
 * Processes utterances by converting start and end times to seconds.
 * @param {Array} utterances - Array of utterance objects.
 * @returns {Array} - Array of processed utterances.
 */
export function processUtterances(utterances) {
    return utterances.map(utterance => ({
        ...utterance,
        start: Math.round(utterance.start / 1000),
        end: Math.round(utterance.end / 1000),
    }));
}

/**
 * Calculates word frequencies from a list of utterances.
 * @param {Array} utterances - Array of utterance objects.
 * @returns {Array} - Top 25 words by frequency.
 */
export function calculateWordFrequencies(utterances) {
    const wordFrequencyMap = {};

    utterances.forEach(utt => {
        if (utt.text && typeof utt.text === 'string') {
            const words = utt.text.split(/\s+/);
            words.forEach(word => {
                if (word.trim()) {
                    wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
                }
            });
        }
    });

    const sortedWords = Object.entries(wordFrequencyMap)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 25)
        .map(([word]) => word);

    return sortedWords;
}

/**
 * Prepares heatmap data based on utterances, word frequencies, and durations.
 * @param {Array} utterances - Array of utterance objects.
 * @param {Array} wordFrequencies - List of top words by frequency.
 * @param {Array} utteranceDurations - Array of durations for each utterance.
 * @returns {Array} - Array of heatmap data objects.
 */
export function prepareHeatmapData(utterances, wordFrequencies, utteranceDurations) {
    return utterances.map((utt, index) => {
        const percentile = calculatePercentile(utt.word_count, wordFrequencies);
        return {
            x: (index % 31) * 12,
            y: Math.floor(index / 31) * 12,
            speaker: utt.speaker,
            text: utt.text,
            value: utt.word_count,
            duration: utteranceDurations[index] || 0,
            color: getColorForCell({ speaker: utt.speaker, percentile, isOverlap: utt.isOverlap }),
            index,
            isTopWord: wordFrequencies.includes(utt.text)
        };
    });
}

/**
 * Loads and processes data for heatmap visualization.
 * @returns {Promise<Array>} - An array of processed heatmap data objects.
 */
export async function loadDataForHeatmap() {
    try {
        const fileList = await fetchJSON('/data/fileList.json');
        const files = fileList.filter(file => file !== 'fileList.json');

        const processedData = await Promise.all(files.map(async (fileName) => {
            try {
                const data = await fetchJSON(`/data/${fileName}`);
                const { sessionData, wordFrequencies } = processJsonData(data);
                const utterances = processUtterances(sessionData.utterances);
                const durations = calculateDurations(utterances);
                const heatmapGridData = prepareHeatmapData(utterances, wordFrequencies, durations);

                return {
                    fileName,
                    heatmapData: heatmapGridData,
                };
            } catch (error) {
                console.error(`Error processing ${fileName}:`, error.message);
                return null;
            }
        }));

        return processedData.filter(item => item !== null);
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}
