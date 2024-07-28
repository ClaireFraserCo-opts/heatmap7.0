// src/utils/heatmapUtils.js
import { scaleSequential, interpolateViridis } from 'd3';
import { colorShades } from './colorShades'; // Import custom color definitions


/**
 * Gets the color for an utterance based on its properties and dataset.
 * @param {Object} utterance - The utterance data object.
 * @param {Array} data - The dataset containing all utterances.
 * @returns {string} - The color for the utterance.
 */
export const getColorForUtterance = (utterance) => {
   const percentile = utterance.percentile || 0; // Use pre-calculated percentile
  

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
