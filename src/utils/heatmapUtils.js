// ../utils/heatmapUtils.js

import { colorShades } from './colorShades'; // Adjust the path as necessary

/**
 * Calculates the percentile rank of a value within a dataset.
 * @param {number} value - The value to find the percentile for.
 * @param {Array} data - The dataset to compare against.
 * @returns {number} - The percentile rank of the value (0 to 100).
 */
export const calculatePercentile = (value = 0, data = []) => {
  if (!Array.isArray(data) || data.length === 0) return 0;

  // Filter out items that do not have a valid `wordFrequency` property
  const filteredData = data.filter(item => item && item.wordFrequency !== undefined);

  if (filteredData.length === 0) return 0;

  const sorted = filteredData.slice().sort((a, b) => a.wordFrequency - b.wordFrequency);
  const rank = sorted.findIndex(d => d.wordFrequency >= value) + 1;

  if (rank <= 0) return 0;
  if (rank > sorted.length) return 100;

  return (rank / sorted.length) * 100;
};

/**
 * Gets the color for an utterance based on its properties and dataset.
 * @param {Object} utterance - The utterance data object.
 * @param {Object} data - The dataset containing all utterances.
 * @returns {string} - The color for the utterance.
 */
export const getColorForUtterance = (utterance = {}, data = {}) => {
  if (!utterance) return colorShades.silenceColor;
  if (utterance.isOverlap) return colorShades.overlapColor;
  if (utterance.wordFrequency === undefined || utterance.wordFrequency === 0) return colorShades.silenceColor;
  
  const percentile = calculatePercentile(utterance.wordFrequency, data.utterances || []);
  let shades;

  switch (utterance.speaker) {
    case 'A':
      shades = colorShades.speakerColors.A.range();
      break;
    case 'B':
      shades = colorShades.speakerColors.B.range();
      break;
    case 'C':
      shades = colorShades.speakerColors.C.range();
      break;
    case 'D':
      shades = colorShades.speakerColors.D.range();
      break;
    default:
      shades = [colorShades.silenceColor]; // Default to silence if speaker type is unknown
  }

  const index = Math.floor((percentile / 100) * (shades.length - 1));
  console.log(`Utterance Color: ${shades[index]}`); // Debugging
  return shades[index];
};

/**
 * Gets the color for a word based on its properties.
 * @param {Object} word - The word data object.
 * @returns {string} - The color for the word.
 */
export const getColorForWord = (word = {}) => {
  if (!word) return colorShades.silenceColor;

  let shades;

  switch (word.speaker) {
    case 'A':
      shades = colorShades.speakerColors.A.range();
      break;
    case 'B':
      shades = colorShades.speakerColors.B.range();
      break;
    case 'C':
      shades = colorShades.speakerColors.C.range();
      break;
    case 'D':
      shades = colorShades.speakerColors.D.range();
      break;
    default:
      shades = [colorShades.silenceColor]; // Default to silence if speaker type is unknown
  }
  
  if (word.isOverlap) return colorShades.overlapColor;
  if (word.confidence === undefined || word.confidence < 0.5) return colorShades.silenceColor;

  const confidenceIndex = Math.floor(word.confidence * (shades.length - 1));
  console.log(`Word Color: ${shades[confidenceIndex]}`); // Debugging
  return shades[confidenceIndex];
};

/**
 * Generates heatmap data from processed JSON data.
 * @param {Array} data - The processed data suitable for heatmap.
 * @returns {Array} - Data formatted for heatmap visualization.
 */
export function generateHeatmapData(data) {
  return data.map(item => ({
      x: item.start, // Adjust based on your heatmap X-axis
      y: item.confidence, // Adjust based on your heatmap Y-axis
      label: item.text
  }));
}



// export const getColorForSpeaker = (speaker) => {
//   switch (speaker) {
//     case 'A':
//       return colorShades.speakerA[Math.floor(Math.random() * colorShades.speakerA.length)];
//     case 'B':
//       return colorShades.speakerB[Math.floor(Math.random() * colorShades.speakerB.length)];
//     case 'C':
//       return colorShades.speakerC[Math.floor(Math.random() * colorShades.speakerC.length)];
//     case 'D':
//       return colorShades.speakerD[Math.floor(Math.random() * colorShades.speakerD.length)];
//     default:
//       return colorShades.silence;
//   }
// };
