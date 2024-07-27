/**
 * Initializes a grid based on the utterances and cell dimensions.
 * @param {Array} utterances - The list of utterances.
 * @param {number} cellWidth - The width of each cell in the grid.
 * @param {number} cellHeight - The height of each cell in the grid.
 * @param {number} duration - The total duration represented by the grid.
 * @returns {Array} - The initialized grid, where each cell is an object with grid properties.
 */
export const initializeGrid = (utterances, cellWidth, cellHeight, containerWidth, containerHeight) => {
  // Calculate the number of columns and rows based on container dimensions
  const numCols = Math.floor(containerWidth / cellWidth);
  const numRows = Math.floor(containerHeight / cellHeight);

  // Create the grid with cells
  const grid = Array.from({ length: numCols * numRows }, (_, index) => {
    const x = (index % numCols) * cellWidth;
    const y = Math.floor(index / numCols) * cellHeight;

    // Initialize cell data
    return {
      index,
      x,
      y,
      speaker: null,
      wordFrequency: null,
      percentile: null,
      color: null
    };
  });

  console.log('Initialized grid data:', grid);
  return grid;
};
