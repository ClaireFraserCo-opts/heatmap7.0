// src/utils/colorShades.js


import * as d3 from 'd3';

/**
 * Defines the color scales for different speakers and color constants for special cases.
 */
export const colorShades = {
  speakerColors: {
    A: d3.scaleLinear().domain([0, 100]).range(['#fde0dd', '#c51b8a']), // Light to dark pink
    B: d3.scaleLinear().domain([0, 100]).range(['#d4e157', '#33691e']), // Light to dark green
    C: d3.scaleLinear().domain([0, 100]).range(['#add8e6', '#00008b']), // Light to dark blue
    D: d3.scaleLinear().domain([0, 100]).range(['#f5deb3', '#8b4513']), // Light to dark brown
    // Define additional speaker color scales if needed
  },
  silenceColor: '#808080',  // Grey
  overlapColor: '#d50000',  // Cardinal red
  unknownSpeakerColor: '#b0b0b0',  // Neutral grey for unknown speakers
  confidenceScale: d3.scaleLinear().domain([0, 1]).range(['#ffe0b2', '#e65100']), // Light to dark orange
  sentimentScale: d3.scaleOrdinal().domain(['POSITIVE', 'NEUTRAL', 'NEGATIVE']).range(['#1f77b4', '#ff7f0e', '#2ca02c']), // Blue, Orange, Green
};

/**
 * Determines the color for a cell based on its properties.
 * @param {Object} cell - The data object representing the cell.
 * @param {boolean} [cell.isOverlap] - Indicates if the cell represents an overlap.
 * @param {string} [cell.speaker] - The speaker identifier.
 * @param {number} [cell.percentile] - The percentile for color scaling.
 * @param {number} [cell.confidenceScore] - The confidence score for color scaling.
 * @param {string} [cell.sentimentLabel] - The sentiment label for color scaling.
 * @returns {string} - The color to be applied to the cell.
 */
export const getColorForCell = (cell = {}) => {
    // Log the cell object for debugging
    console.log('Cell:', cell);

    // Check if the cell represents an overlap
    if (cell.isOverlap) {
        console.log('Overlap color:', colorShades.overlapColor);
        return colorShades.overlapColor;
    }

    // Check if the cell represents silence
    if (cell.speaker === 'silence') {
        console.log('Silence color:', colorShades.silenceColor);
        return colorShades.silenceColor;
    }

    // Handle confidence-based coloring
    if (cell.confidenceScore !== undefined) {
      const confidenceColor = colorShades.confidenceScale(cell.confidenceScore);
      console.log('Confidence color:', confidenceColor);
      return confidenceColor;
    }

    // Handle sentiment-based coloring
    if (cell.sentimentLabel !== undefined) {
      const sentimentColor = colorShades.sentimentScale(cell.sentimentLabel);
      console.log('Sentiment color:', sentimentColor);
      return sentimentColor;
    }

    // Handle unknown or invalid speakers
    if (!cell.speaker || !colorShades.speakerColors[cell.speaker]) {
        console.log('Unknown speaker color:', colorShades.unknownSpeakerColor);
        return colorShades.unknownSpeakerColor;
    }

    // Get the color scale for the known speaker
    const colorScale = colorShades.speakerColors[cell.speaker];
    console.log('Color scale for speaker:', cell.speaker, colorScale);

    // Ensure percentile is within the expected range
    const percentile = Math.max(0, Math.min(100, cell.percentile)); // Ensure percentile is within domain
    console.log('Percentile:', percentile);

    // Calculate and return the color based on the percentile
    const color = colorScale(percentile);
    console.log('Calculated color:', color);
    return color;
};

/**
 * Returns the color based on confidence score.
 * @param {number} confidenceScore - The confidence score.
 * @returns {string} - The color for the confidence score.
 */
export const getColorForConfidence = (confidenceScore) => {
  const color = colorShades.confidenceScale(confidenceScore);
  console.log('Confidence color:', color);
  return color;
};

/**
 * Returns the color based on sentiment label.
 * @param {string} sentimentLabel - The sentiment label ('POSITIVE', 'NEUTRAL', 'NEGATIVE').
 * @returns {string} - The color for the sentiment label.
 */
export const getColorForSentiment = (sentimentLabel) => {
  const color = colorShades.sentimentScale(sentimentLabel);
  console.log('Sentiment color:', color);
  return color;
};


/**
 * Returns a color based on the word frequency percentile.
 * @param {number} percentile - The percentile rank of the word frequency.
 * @returns {string} - The color for the percentile.
 */
export const getColorForPercentile = (percentile) => {
  if (percentile <= 5) return '#000000'; // Darkest shade for top 5%
  if (percentile <= 10) return '#333333';
  if (percentile <= 25) return '#666666';
  if (percentile <= 50) return '#999999';
  if (percentile <= 75) return '#CCCCCC';
  return '#FFFFFF'; // Lightest shade for bottom 5%
};

/**
 * Returns a color for the utterance based on its properties.
 * @param {Object} utterance - The utterance object.
 * @returns {string} - The color for the utterance.
 */
export const getColorForUtterance = (utterance) => {
  if (!utterance) return '#FFFFFF'; // Default color

  if (utterance.isOverlap) return '#DC143C'; // Cardinal red for overlap
  if (utterance.isSilence) return '#D3D3D3'; // Light grey for silence

  // Calculate percentile if word frequency is defined
  const percentile = utterance.percentile || 100; // Default to highest percentile if not defined
  return getColorForPercentile(percentile);
};

// Future ideas for possible implementation:

//   confidenceScale: d3.scaleLinear()
//     .domain([0, 1])  // Confidence score ranges from 0 to 1
//     .range(['#f7fbff', '#08306b']), // Light to dark blue

//   sentimentScale: d3.scaleOrdinal()
//     .domain(['POSITIVE', 'NEUTRAL', 'NEGATIVE'])
//     .range(['#2ca02c', '#d3d3d3', '#d62728']), // Green, Gray, Red
