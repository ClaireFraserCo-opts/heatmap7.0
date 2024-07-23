// colorShades.js
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
  unknownSpeakerColor: '#b0b0b0'  // Neutral grey for unknown speakers
};

/**
 * Determines the color for a cell based on its properties.
 * @param {Object} cell - The data object representing the cell.
 * @param {boolean} cell.isOverlap - Indicates if the cell represents an overlap.
 * @param {string} [cell.speaker] - The speaker identifier.
 * @param {number} [cell.percentile] - The percentile for color scaling.
 * @returns {string} - The color to be applied to the cell.
 */
export const getColorForCell = (cell) => {
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


// Future ideas for possible implementation:

//   confidenceScale: d3.scaleLinear()
//     .domain([0, 1])  // Confidence score ranges from 0 to 1
//     .range(['#f7fbff', '#08306b']), // Light to dark blue

//   sentimentScale: d3.scaleOrdinal()
//     .domain(['POSITIVE', 'NEUTRAL', 'NEGATIVE'])
//     .range(['#2ca02c', '#d3d3d3', '#d62728']), // Green, Gray, Red

