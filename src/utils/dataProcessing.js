import { fetchJSON } from './fetchData';  // Import fetchJSON from fetchData.js
import { calculateDurations } from './durationUtils';
import { getConfig } from './configUtils';
import { validateUtterances } from './validationUtils';
import { formatTime } from './helpers';
import { getColorForCell } from './colorShades'; // Ensure this is the correct import

/**
 * Processes raw JSON data based on its structure.
 * @param {Object} jsonData - The JSON data to process.
 * @returns {Object} - Processed data including sessionData and wordFrequencies.
 */
export function processJsonData(jsonData) {
    if (!jsonData) {
        throw new Error('Invalid data format: No data provided');
    }

    console.log('Raw JSON data:', jsonData); // Log raw data to inspect

    let sessionData;
    let wordFrequencies;

    if (Array.isArray(jsonData.utterances) && Array.isArray(jsonData.words)) {
        // Type 1: tx Files
        sessionData = {
            utterances: jsonData.utterances,
            words: jsonData.words
        };
        wordFrequencies = jsonData.words.map(word => word.word); // Extract words for frequency list
    } else if (jsonData.language_code && jsonData.audio_url && Array.isArray(jsonData.words) && Array.isArray(jsonData.utterances)) {
        // Type 2: pretty Files
        sessionData = {
            utterances: jsonData.utterances,
            words: jsonData.words
        };
        wordFrequencies = jsonData.words.map(word => word.word); // Extract words for frequency list
    } else {
        throw new Error('Unknown data format: The provided data does not match expected structures');
    }

    // Validate sessionData structure
    console.log('Processed sessionData:', sessionData); // Log processed sessionData
    validateUtterances(sessionData.utterances);

    // Config settings
    const summaryLength = getConfig('SUMMARY_LENGTH');
    const frequentWords = getConfig('FREQUENT_WORDS');
    const persona = getConfig('PERSONA');

    const config = { summaryLength, frequentWords, persona };

    return { sessionData, wordFrequencies, config };
}

/**
 * Processes utterances by converting start and end times to formatted strings.
 * @param {Array} utterances - Array of utterance objects.
 * @returns {Array} - Array of processed utterances.
 */
export function processUtterances(utterances) {
    return utterances.map(utterance => ({
        ...utterance,
        start: formatTime(utterance.start / 1000), // Format start time
        end: formatTime(utterance.end / 1000),     // Format end time
    }));
}

/**
 * Prepares heatmap data based on utterances, word frequencies, and durations.
 * @param {Array} utterances - Array of utterance objects.
 * @param {Array} wordFrequencies - List of top words by frequency.
 * @param {Array} utteranceDurations - Array of durations for each utterance.
 * @param {Object} config - Configuration settings for the heatmap.
 * @returns {Array} - Array of heatmap data objects.
 */
export function prepareHeatmapData(utterances, wordFrequencies, utteranceDurations, config) {
    return utterances.map((utt, index) => {
        return {
            x: (index % 31) * 12,
            y: Math.floor(index / 31) * 12,
            speaker: utt.speaker,
            text: utt.text,
            value: utt.word_count, // Use the pre-calculated word count
            duration: utteranceDurations[index] || 0, // Assume durations are still calculated separately
            color: getColorForCell({ speaker: utt.speaker, percentile, isOverlap: utt.isOverlap }), // Use pre-calculated percentile
            index: utt.index || index, // Use pre-calculated index or fallback to loop index 
            isTopWord: wordFrequencies.includes(utt.text),
            config: config // Pass config if needed for rendering or processing
        };
    });
}

/**
 * Loads and processes data for heatmap visualization.
 * @returns {Promise<Array>} - An array of processed heatmap data objects.
 */
export async function loadDataForHeatmap() {
    try {
        // Fetch the list of files from 'fileList.json'
        const fileList = await fetchJSON('/data/fileList.json');

        if (!Array.isArray(fileList)) {
            throw new Error('Invalid format for file list');
        }

        // Filter out 'fileList.json' itself from the list
        const files = fileList.filter(file => typeof file === 'string' && file !== 'fileList.json');

        // Map over each file to fetch and process its data
        const processedData = await Promise.all(files.map(async (fileName) => {
            try {
                // Fetch JSON data for each file
                const data = await fetchJSON(`/data/${fileName}`);
                console.log(`Loaded data for ${fileName}:`, data); // Log data to inspect
                
                const { sessionData, wordFrequencies, config } = processJsonData(data);

                // If config is needed here, use it, otherwise you can remove this line
                console.log(`Config for ${fileName}:`, config);

                // Perform further processing with sessionData and wordFrequencies
                // For example, you might want to prepare heatmap data here
                const utteranceDurations = calculateDurations(sessionData.utterances);
                const heatmapData = prepareHeatmapData(sessionData.utterances, wordFrequencies, utteranceDurations, config);

                return {
                    fileName,
                    sessionData,
                    wordFrequencies,
                    heatmapData
                };
            } catch (error) {
                console.error(`Error processing file ${fileName}:`, error);
                return null;
            }
        }));

        // Filter out any failed processing results
        return processedData.filter(item => item !== null);
    } catch (error) {
        // Logging errors during the data loading phase
        console.error('Error loading data:', error.message);
        return [];
    }
}
