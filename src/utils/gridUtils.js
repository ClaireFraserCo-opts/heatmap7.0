// src/utils/gridUtils.js

export const initializeGrid = (utterances, cellWidth, cellHeight, duration) => {
  const totalCells = Math.ceil(duration / cellWidth) * Math.ceil(utterances.length / cellHeight);
  const grid = Array.from({ length: totalCells }, (_, index) => ({
    index,
    x: (index % cellWidth) * cellWidth,
    y: Math.floor(index / cellWidth) * cellHeight,
    speaker: null,
    wordFrequency: null,
    percentile: null,
    color: null
  }));

  return grid;
};
