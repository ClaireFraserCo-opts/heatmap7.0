// heatmapUtils.js
import { scaleSequential, interpolateViridis } from 'd3';
import { colorShades } from './colorShades'; // Import custom color definitions

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
 * @param {Array} data - The dataset containing all utterances.
 * @returns {string} - The color for the utterance.
 */
export const getColorForUtterance = (utterance, data) => {
  const value = utterance.wordFrequency || 0;
  const percentile = calculatePercentile(value, data);

  // Use custom color scales from colorShades
  const colorScale = scaleSequential(interpolateViridis).domain([0, 100]);
  return colorScale(percentile);
};

/**
 * Gets the color for a word based on its properties.
 * @param {Object} word - The word data object.
 * @returns {string} - The color for the word.
 */
export const getColorForWord = (word = {}) => {
  if (!word) return colorShades.silenceColor;

  let colorScale;

  switch (word.speaker) {
    case 'A':
      colorScale = colorShades.speakerColors.A;
      break;
    case 'B':
      colorScale = colorShades.speakerColors.B;
      break;
    case 'C':
      colorScale = colorShades.speakerColors.C;
      break;
    case 'D':
      colorScale = colorShades.speakerColors.D;
      break;
    default:
      colorScale = () => colorShades.unknownSpeakerColor; // Default to unknown speaker color
  }

  if (word.isOverlap) return colorShades.overlapColor;
  if (word.confidence === undefined || word.confidence < 0.5) return colorShades.silenceColor;

  // Use the confidence scale if available
  const confidenceIndex = Math.floor(word.confidence * (colorScale.range().length - 1));
  return colorScale(confidenceIndex / (colorScale.range().length - 1));
};

/**
 * Generates heatmap data from processed JSON data.
 * @param {Array} data - The processed data suitable for heatmap.
 * @returns {Array} - Data formatted for heatmap visualization.
 */
export const generateHeatmapData = (data) => {
  return data.map((item, index) => ({
    x: index % 100 * 12, // Adjust based on your heatmap X-axis
    y: Math.floor(index / 100) * 12, // Adjust based on your heatmap Y-axis
    color: getColorForUtterance(item, data),
    ...item
  }));
};
