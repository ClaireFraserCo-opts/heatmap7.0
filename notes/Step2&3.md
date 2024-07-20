Step 2: Array Initialization
Objective: Initialize an array representing the heatmap grid where each cell contains information about the speaker, word frequency, percentile, and color.

Key Points:
Cell Information: Each cell should store data including the speaker, word frequency, percentile, and color.
Array Initialization: Create an array with a specific number of cells and fill it with default values.
Processing Data: Map your data onto this grid, assigning values to each cell.

Step 3: Cell Size and Layout
Objective: Determine and set the size of each cell based on the display dimensions and utterance duration, ensuring responsiveness.

Key Points:
Calculate Cell Size: Based on container dimensions and using the Phi (Golden Ratio) algorithm to maintain aesthetic proportions.
Responsive Design: Adjust the layout dynamically based on the viewport size.

1. Cell Size Calculation:

- Calculate numCellsX and numCellsY based on container size and the Golden Ratio.
- Ensure cells are square by using the smaller dimension for cell size.
- Adjust coordinates for heatmap.js based on cell size.

2. Responsive Design:

- Use window size to set container dimensions and update dynamically on resize.

3. Grid Initialization:

- Initialize the grid with default values and process data to fill in actual values.

4. Heatmap Data Generation:

- Map the processed grid data to heatmap data format for visualization.