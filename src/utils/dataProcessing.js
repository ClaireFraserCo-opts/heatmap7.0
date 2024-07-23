import { calculatePercentile } from './heatmapUtils';
import { calculateDurations } from './durationUtils';
import { getColorForCell } from './colorShades';

// Function to load data from JSON files
export const loadData = async () => {
  try {
    // Load file list
    const fileListResponse = await fetch('/data/fileList.json');
    const fileList = await fileListResponse.json();
    console.log('Loaded file list:', fileList); // Log the file list

    // Filter out 'fileList.json' itself
    const jsonFiles = fileList.filter(file => !file.includes('fileList.json'));
    console.log('Filtered JSON files:', jsonFiles); // Log the filtered file list

    // Fetch and process JSON files
    const dataPromises = jsonFiles.map(file =>
      fetch(`/data/${file}`).then(response => response.json()).then(data => {
        console.log(`Loaded data from ${file}:`, data); // Log data from each file

        // Process utterances
        const utterances = processUtterances(data);

        // Calculate durations
        const durations = calculateDurations(utterances);

        return { file, utterances, durations };
      })
    );

    // Load all data files
    const data = await Promise.all(dataPromises);
    console.log('Loaded all data:', data); // Log the final data array

    // Process the loaded data
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};

// Function to process utterances by converting start and end times to seconds
export const processUtterances = (data) => {
  const utterances = data.flatMap(sessionData => {
    // Check if sessionData and sessionData.utterances are defined
    if (!sessionData || !sessionData.utterances) return [];
    return sessionData.utterances.map(utterance => ({
      ...utterance,
      start: Math.round(utterance.start / 1000),  // Convert to seconds
      end: Math.round(utterance.end / 1000),  // Convert to seconds
    }));
  });
  console.log('Processed utterances:', utterances); // Log the processed utterances
  return utterances;
};

// Function to calculate word frequencies
export const calculateWordFrequencies = (utterances) => {
  const wordFrequencyMap = {};
  utterances.forEach(utt => {
    const words = utt.text.split(/\s+/);
    words.forEach(word => {
      wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
    });
  });
  const sortedWords = Object.entries(wordFrequencyMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 25)
    .map(([word]) => word);
  console.log('Calculated word frequencies:', sortedWords); // Log the word frequencies
  return sortedWords;
};

// Function to prepare heatmap data
export const prepareHeatmapData = (utterances, wordFrequencies) => {
  const gridData = [];
  utterances.forEach((utt, index) => {
    const percentile = calculatePercentile(utt.word_count, wordFrequencies);
    const cell = {
      x: (index % 31) * 12,
      y: Math.floor(index / 31) * 12,
      speaker: utt.speaker,
      text: utt.text,
      value: utt.word_count,
      color: getColorForCell({speaker: utt.speaker, percentile, isOverlap: utt.isOverlap}),
      index,
    };
    gridData.push(cell);
  });
  console.log('Prepared heatmap data:', gridData);
  return gridData;
};


/**
 * Processes Type 1 JSON data and returns a suitable format for heatmap.
 * @param {Object} jsonData - The Type 1 JSON data.
 * @returns {Array} - Processed data suitable for heatmap visualization.
 */
export function processType1Data(jsonData) {
  return jsonData.utterances.map(utterance => ({
      speaker: utterance.speaker,
      text: utterance.text,
      start: utterance.start,
      end: utterance.end,
      confidence: utterance.confidence
  }));
}

/**
 * Processes Type 2 JSON data and returns a suitable format for heatmap.
 * @param {Object} jsonData - The Type 2 JSON data.
 * @returns {Array} - Processed data suitable for heatmap visualization.
 */
export function processType2Data(jsonData) {
  return jsonData.utterances.map(utterance => ({
      speaker: utterance.speaker,
      text: utterance.text,
      start: utterance.start,
      end: utterance.end,
      confidence: utterance.confidence
  }));
}

/**
 * Merges Type 1 and Type 2 data into a unified format.
 * @param {Array} type1Data - The processed Type 1 data.
 * @param {Array} type2Data - The processed Type 2 data.
 * @returns {Array} - Merged and sorted data.
 */
export function mergeAndSortData(type1Data, type2Data) {
  const combinedData = [...type1Data, ...type2Data];
  return combinedData.sort((a, b) => a.start - b.start);
}
