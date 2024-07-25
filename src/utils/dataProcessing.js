import { calculatePercentile } from './heatmapUtils';
import { calculateDurations } from './durationUtils';
import { getColorForCell } from './colorShades';

/**
 * Loads data from JSON files, processes it, and returns structured data.
 * @returns {Promise<Array>} - An array of processed data from JSON files.
 */
export const loadData = async () => {
  try {
    // Load file index
    const fileIndexResponse = await fetch('/data/fileIndex.json');
    if (!fileIndexResponse.ok) {
      throw new Error(`Failed to fetch file index: ${fileIndexResponse.statusText}`);
    }
    const fileIndex = await fileIndexResponse.json();
    console.log('Loaded file index:', fileIndex);

    // Load heatmap data list
    const heatmapDataListResponse = await fetch('/data/heatmapDataList.json');
    if (!heatmapDataListResponse.ok) {
      throw new Error(`Failed to fetch heatmap data list: ${heatmapDataListResponse.statusText}`);
    }
    const heatmapDataList = await heatmapDataListResponse.json();
    console.log('Loaded heatmap data list:', heatmapDataList);

    // Filter out heatmap data files
    const heatmapFiles = fileIndex.map(file => file.fileName).filter(name => name.endsWith('.json'));
    console.log('Heatmap files to process:', heatmapFiles);

    // Fetch and process heatmap data files
    const dataPromises = heatmapFiles.map(file =>
      fetch(`/data/${file}`).then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
        }
        return response.json();
      }).then(data => {
        console.log(`Loaded data from ${file}:`, data);

        // Process the heatmap data
        const utterances = processUtterances(data);
        const wordFrequencies = calculateWordFrequencies(utterances);
        const durations = calculateDurations(utterances);
        const heatmapGridData = prepareHeatmapData(utterances, wordFrequencies, durations);

        return {
          fileName: file,
          heatmapData: heatmapGridData,
        };
      }).catch(error => {
        console.error(`Error processing ${file}:`, error);
        return null; // Handle the error
      })
    );

    // Wait for all data to be fetched and processed
    const data = await Promise.all(dataPromises);
    console.log('Loaded all data:', data);

    return data.filter(item => item !== null); // Filter out errors
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};

/**
 * Processes heatmap data from JSON files.
 * @param {Object} data - JSON data object containing heatmap data.
 * @returns {Object} - Processed data suitable for heatmap visualization.
 */
export const processHeatmapData = (data) => {
  const { name, heatmapData, topWords, speakerInfo } = data;

  const utterances = extractUtterances(heatmapData, speakerInfo);
  const wordFrequencies = extractWordFrequencies(topWords);
  const utteranceDurations = calculateDurations(utterances);

  const heatmapGridData = prepareHeatmapData(utterances, wordFrequencies, utteranceDurations);

  return {
    fileName: name,
    heatmapData: heatmapGridData,
  };
};


/**
 * Extracts utterances from heatmap data.
 * @param {Array} heatmapData - Array of heatmap data objects.
 * @param {Array} speakerInfo - Array of speaker information.
 * @returns {Array} - Array of extracted utterances.
 */
const extractUtterances = (heatmapData, speakerInfo) => {
  const utterances = heatmapData.flatMap(entry =>
    entry.cells.map(cell => ({
      speaker: entry.speaker,
      text: cell.word,
      word_count: cell.count,
      isOverlap: cell.isTopWord, // Mapping isTopWord to isOverlap
    }))
  );
  console.log('Extracted utterances:', utterances);
  return utterances;
};


/**
 * Extracts word frequencies from top words.
 * @param {Object} topWords - Object containing top words by speaker.
 * @returns {Array} - Array of top words.
 */
const extractWordFrequencies = (topWords) => {
  const allWords = Object.values(topWords).flat();
  const wordFrequencyMap = {};
  allWords.forEach(word => {
    wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
  });
  const sortedWords = Object.entries(wordFrequencyMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 25)
    .map(([word]) => word);
  console.log('Extracted word frequencies:', sortedWords);
  return sortedWords;
};


/**
 * Prepares heatmap data based on utterances, word frequencies, and durations.
 * @param {Array} utterances - Array of utterance objects.
 * @param {Array} wordFrequencies - List of top words by frequency.
 * @param {Array} utteranceDurations - Array of durations for each utterance.
 * @returns {Array} - Array of heatmap data objects.
 */
export const prepareHeatmapData = (utterances, wordFrequencies, utteranceDurations) => {
  const gridData = utterances.map((utt, index) => {
    const percentile = calculatePercentile(utt.word_count, wordFrequencies);
    return {
      x: (index % 31) * 12, // Adjust cell positioning as needed
      y: Math.floor(index / 31) * 12,
      speaker: utt.speaker,
      text: utt.text,
      value: utt.word_count,
      duration: utteranceDurations[index] || 0, // Ensure duration is available
      color: getColorForCell({ speaker: utt.speaker, percentile, isOverlap: utt.isOverlap }),
      index,
      isTopWord: wordFrequencies.includes(utt.text) // Mark top words
    };
  });
  console.log('Prepared heatmap data:', gridData);
  return gridData;
};


/**
 * Processes utterances by converting start and end times to seconds.
 * @param {Array} data - Array of JSON data objects.
 * @returns {Array} - Array of processed utterances.
 */
export const processUtterances = (data) => {
  const utterances = data.flatMap(sessionData => {
    if (!sessionData || !sessionData.utterances) return [];
    return sessionData.utterances.map(utterance => ({
      ...utterance,
      start: Math.round(utterance.start / 1000),
      end: Math.round(utterance.end / 1000),
    }));
  });
  console.log('Processed utterances:', utterances);
  return utterances;
};

/**
 * Calculates word frequencies from a list of utterances.
 * @param {Array} utterances - Array of utterance objects.
 * @returns {Array} - Top 25 words by frequency.
 */
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
  console.log('Calculated word frequencies:', sortedWords);
  return sortedWords;
};

/**
 * Initializes the heatmap grid data based on provided utterances.
 * @param {Array} data - Array of processed heatmap data objects.
 * @param {number} cellWidth - Width of each grid cell.
 * @param {number} cellHeight - Height of each grid cell.
 * @param {number} duration - Duration of the heatmap in seconds.
 * @returns {Array} - Array of initialized grid data objects.
 */
export const initializeGrid = (data, cellWidth, cellHeight, duration) => {
  const grid = [];
  const numCellsX = Math.floor(window.innerWidth * 0.8 / cellWidth);
  const numCellsY = Math.floor(window.innerHeight * 0.8 / cellHeight);

  for (let i = 0; i < numCellsX * numCellsY; i++) {
    const item = data[i % data.length] || {};
    grid.push({
      ...item,
      x: (i % numCellsX) * cellWidth,
      y: Math.floor(i / numCellsX) * cellHeight,
      width: cellWidth,
      height: cellHeight,
    });
  }

  console.log('Initialized grid data:', grid);
  return grid;
};
