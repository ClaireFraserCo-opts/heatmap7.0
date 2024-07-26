import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  processUtterances,
  calculateWordFrequencies,
  prepareHeatmapData,
  initializeGrid,
} from "../utils/dataProcessing";
import Tooltip from "./Tooltip";
import Grid from "./Grid";
import "./../styles/HeatmapComponent.css";
import { getColorForCell } from "../utils/colorShades"; // Ensure this is correctly imported

// Define cell dimensions
const cellWidth = 12;
const cellHeight = Math.round(cellWidth * 1.618);
const duration = 2405; // Duration of the heatmap in seconds

const HeatmapComponent = ({ data }) => {
  console.log("Heatmap data:", data); // Debug statement

  if (!data || data.length === 0) return <div>No heatmap data available.</div>;

  const [heatmapData, setHeatmapData] = useState([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  const processData = useCallback(async () => {
    try {
      console.log("Starting data processing");
  
      // Validate if data is an array
      if (!Array.isArray(data)) {
        console.error('Expected data to be an array, but received:', data);
        return; // Exit the function if data is not valid
      }
  
      // Process data using processUtterances
      const utterances = processUtterances(data);
      console.log("Processed Utterances:", utterances);
  
      // Ensure that processUtterances returns valid data
      if (!Array.isArray(utterances)) {
        console.error('Expected utterances to be an array, but received:', utterances);
        return; // Exit if utterances is not valid
      }
  
      // Calculate word frequencies
      const wordFrequencies = calculateWordFrequencies(utterances);
      console.log("Calculated Word Frequencies:", wordFrequencies);
  
      // Prepare heatmap data
      const processedHeatmapData = prepareHeatmapData(utterances, wordFrequencies);
      console.log("Processed Heatmap Data:", processedHeatmapData);
  
      // Initialize grid
      const grid = initializeGrid(processedHeatmapData, cellWidth, cellHeight, duration);
      console.log("Initialized Grid Data:", grid);
  
      // Update state with grid data
      setHeatmapData(grid);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }, [data]);
  

  useEffect(() => {
    processData();
  }, [processData]);

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Prepare grid data for rendering
  const processGridData = () => {
    // Return an empty array if no heatmap data is available
    if (!heatmapData.length) return [];

    const { width, height } = containerSize;
    console.log("Container Size:", containerSize);

    const numCellsX = Math.floor(width / cellWidth);
    const numCellsY = Math.floor(height / cellHeight);

    console.log("Number of Cells X:", numCellsX);
    console.log("Number of Cells Y:", numCellsY);

    // Create grid data array
    const processedData = new Array(numCellsX * numCellsY)
      .fill(null)
      .map((_, index) => {
        // Get item data based on the index, wrapping around with modulo
        const item = heatmapData[index % heatmapData.length] || {};
        console.log("Processing Cell Index:", index, "Item:", item);

        const x = (index % numCellsX) * cellWidth + cellWidth / 2;
        const y = Math.floor(index / numCellsX) * cellHeight + cellHeight / 2;

        // Ensure getColorForCell gets the correct data
        const utterance = item.utterance || {};
        console.log('Utterance in getColorForCell:', utterance);
        // Debug the color determination
        const color = getColorForCell(utterance);
        console.log("Cell Color:", color);

        console.log("Processed Cell Data:", {
          x,
          y,
          color,
          value: utterance.wordFrequency || 0,
          speaker: utterance.speaker || "",
        });

        // Return the processed cell data
        return {
          ...item,
          x,
          y,
          color,
          value: utterance.wordFrequency || 0, // Default to 0 if wordFrequency is not defined
          speaker: utterance.speaker || "", // Default to empty string if speaker is not defined
        };
      });

    console.log("Processed Grid Data:", processedData);
    return processedData;
  };

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
      {/* Render the grid */}
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

// Define prop types to match the data structure
HeatmapComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      confidence: PropTypes.number,
    })
  ).isRequired,
};

export default HeatmapComponent;
