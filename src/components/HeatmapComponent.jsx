import React, { useEffect, useState, useCallback } from "react";
import {
  processUtterances,
  calculateWordFrequencies,
  prepareHeatmapData,
} from "../utils/dataProcessing";
import { loadDataForHeatmap } from "../utils/fetchData";
import Tooltip from "./Tooltip";
import Grid from "./Grid";
import "./../styles/HeatmapComponent.css";
import { getColorForCell } from "../utils/colorShades";
import { initializeGrid } from "../utils/gridUtils";

// Define cell dimensions
const cellWidth = 12;
const goldenRatio = 1.618;
const cellHeight = Math.round(cellWidth * goldenRatio);

const HeatmapComponent = () => {
  // State to store processed heatmap data
  const [heatmapData, setHeatmapData] = useState([]);
  // State to manage tooltip visibility and content
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  // State to manage container size
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  // useCallback to memoize the data processing function
  const processData = useCallback(async () => {
    try {
      console.log("Starting data processing");

      // Load data from JSON files
      const loadedData = await loadDataForHeatmap();
      console.log("Loaded data:", loadedData);

      if (!Array.isArray(loadedData)) {
        console.error("Expected data to be an array, but received:", loadedData);
        return;
      }

      // Ensure each item in loadedData is valid
      const allUtterances = loadedData.flatMap((data, index) => {
        if (!data || !data.heatmapData) {
          console.error(`Data at index ${index} is invalid:`, data);
          return [];
        }
        return data.heatmapData.map(item => item.utterance);
      });
      console.log("All Utterances:", allUtterances);

      if (!Array.isArray(allUtterances)) {
        console.error("Expected utterances to be an array, but received:", allUtterances);
        return;
      }

      // Calculate word frequencies from the utterances
      const wordFrequencies = calculateWordFrequencies(allUtterances);
      console.log("Calculated Word Frequencies:", wordFrequencies);

      // Prepare data for heatmap visualization
      const processedHeatmapData = prepareHeatmapData(allUtterances, wordFrequencies);
      console.log("Processed Heatmap Data:", processedHeatmapData);

      // Initialize grid with processed heatmap data and container dimensions
      const grid = initializeGrid(
        processedHeatmapData,
        cellWidth,
        cellHeight,
        containerSize.width,
        containerSize.height
      );
      console.log("Initialized Grid Data:", grid);

      // Update state with the initialized grid data
      setHeatmapData(grid);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }, [containerSize.width, containerSize.height]);

  // useEffect to run data processing when the component mounts or containerSize changes
  useEffect(() => {
    processData();
  }, [processData]);

  // useEffect to handle window resize events and update container size
  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    // Add resize event listener
    window.addEventListener("resize", updateSize);
    // Initial size update
    updateSize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Function to process and generate grid data for rendering
  const processGridData = () => {
    if (!heatmapData.length) return [];

    const { width, height } = containerSize;
    console.log("Container Size:", containerSize);

    // Calculate number of cells in X and Y directions
    const numCellsX = Math.floor(width / cellWidth);
    const numCellsY = Math.floor(height / cellHeight);

    console.log("Number of Cells X:", numCellsX);
    console.log("Number of Cells Y:", numCellsY);

    // Create grid data array with calculated dimensions
    const processedData = new Array(numCellsX * numCellsY)
      .fill(null)
      .map((_, index) => {
        const item = heatmapData[index % heatmapData.length] || {};
        console.log("Processing Cell Index:", index, "Item:", item);

        const x = (index % numCellsX) * cellWidth + cellWidth / 2;
        const y = Math.floor(index / numCellsX) * cellHeight + cellHeight / 2;

        const utterance = item.utterance || {};
        console.log("Utterance in getColorForCell:", utterance);
        const color = getColorForCell(utterance);
        console.log("Cell Color:", color);

        return {
          ...item,
          x,
          y,
          color,
          value: utterance.wordFrequency || 0,
          speaker: utterance.speaker || "",
        };
      });

    console.log("Processed Grid Data:", processedData);
    return processedData;
  };

  // Get the processed data for rendering
  const processedData = processGridData();
  console.log("Processed Data for Rendering:", processedData);

  return (
    <div
      style={{
        position: "relative",
        width: containerSize.width,
        height: containerSize.height,
      }}
    >
      <h2>Heatmap</h2>
      <Grid
        data={processedData}
        containerSize={containerSize}
        cellWidth={cellWidth}
        cellHeight={cellHeight}
        setTooltip={setTooltip}
      />
      <Tooltip
        content={tooltip.content}
        visible={tooltip.visible}
        x={tooltip.x}
        y={tooltip.y}
      />
    </div>
  );
};

export default HeatmapComponent;
