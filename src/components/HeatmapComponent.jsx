// src/components/HeatmapComponent.jsx


import React, { useEffect, useState, useCallback } from "react";
// import {
//   processUtterances,
//   calculateWordFrequencies,
//   prepareHeatmapData,
// } from "../utils/dataProcessing";
// import { loadDataForHeatmap } from "../utils/fetchData";
import Tooltip from "./Tooltip";
import Grid from "./Grid";
import "./../styles/HeatmapComponent.css";
import { getColorForCell } from "../utils/colorShades";
import { initializeGrid } from "../utils/gridUtils";
// import { getConfig } from "../utils/configUtils";



// Define cell dimensions
const cellWidth = 12;
const goldenRatio = 1.618;
const cellHeight = Math.round(cellWidth * goldenRatio);

const HeatmapComponent = (props) => {
  console.log(props)
  // State to store processed heatmap data
  const [heatmapData, setHeatmapData] = useState(props.data);
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
  // State to store config
  const [config, setConfig] = useState({
    summaryLength: 500, // default values or fetched
    frequentWords: 10,
    persona: 'default'
  });

   /**
     * Load and process data for the heatmap.
     */
   const processData = useCallback( () => {
    try {
        console.log("Starting data processing");

       


      // Load data from JSON files
      // const loadedData = props.data;
      // console.log("Loaded data:", loadedData);

      // if (!Array.isArray(loadedData)) {
      //   console.error("Expected data to be an array, but received:", loadedData);
      //   return;
      // }

      // Ensure each item in loadedData is valid
      const allUtterances = props.data.utterances
      
      
      // loadedData.flatMap((data, index) => {
      //   if (!data || !data.heatmapData) {
      //     console.error(`Data at index ${index} is invalid:`, data);
      //     return [];
      //   }
      //   return data.heatmapData.map(item => item.utterance);
      // });
      // console.log("All Utterances:", allUtterances);

      if (!Array.isArray(allUtterances)) {
        console.error("Expected utterances to be an array, but received:", allUtterances);
        return;
      }

      // Calculate word frequencies from the utterances
      // const wordFrequencies = calculateWordFrequencies(allUtterances);
      // console.log("Calculated Word Frequencies:", wordFrequencies);

      function prepareHeatmapData(utterances, utteranceDurations, config) {
        // console.log('utterances:', utterances) 
        // console.log('Durations:', utteranceDurations)
        // console.log('Config:', config);

        return utterances.map((utt, index) => {
          // console.log('index ', index, ': ', utt)
            return {
                x: (index % 31) * 12,
                y: Math.floor(index / 31) * 12,
                speaker: utt.speaker,
                text: utt.text,
                value: utt.word_count, // Use the pre-calculated word count
                // TO DO: to fix calculation
                duration: utteranceDurations[index] || 0, // Assume durations are still calculated separately
                color: getColorForCell({ speaker: utt.speaker, percentile: utt.percentile, isOverlap: utt.isOverlap }), // Use pre-calculated percentile
                index: utt.index || index, // Use pre-calculated index or fallback to loop index 
                // isTopWord: wordFrequencies.includes(utt.text),
                config: config // Pass config if needed for rendering or processing
            };
        });
    }
      // Prepare data for heatmap visualization
      const processedHeatmapData = prepareHeatmapData(allUtterances, config);
      console.log("Processed Heatmap Data:", processedHeatmapData);

      // Initialize grid with processed heatmap data and container dimensions
      const grid = initializeGrid(
        processedHeatmapData,
        cellWidth,
        cellHeight,
        containerSize.width,
        containerSize.height
      );
      // console.log("Initialized Grid Data:", grid);

      // Update state with the initialized grid data
      setHeatmapData(grid);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }, [containerSize.width, containerSize.height, config]);

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
  // src/components/HeatmapComponent.jsx

const processGridData = () => {
  if (!heatmapData.length) return [];

  const { width, height } = containerSize;

  const numCellsX = Math.floor(width / cellWidth);
  const numCellsY = Math.floor(height / cellHeight);

  return new Array(numCellsX * numCellsY)
      .fill(null)
      .map((_, index) => {
          // console.log(heatmapData)
          const item = heatmapData[index % heatmapData.length] || {};
          const x = (index % numCellsX) * cellWidth + cellWidth / 2;
          const y = Math.floor(index / numCellsX) * cellHeight + cellHeight / 2;
          // console.log(item)
          
          const utterance = item.utterance || {};
          // console.log(utterance)
          const color = getColorForCell(utterance);

          return {
              ...item,
              x,
              y,
              color,
              value: utterance.wordFrequency || 0,
              speaker: utterance.speaker || "",
          };
      });
};


  // Get the processed data for rendering
  const processedData = processGridData();

  // console.log("Processed Data for Rendering:", processedData);

  /**
     * Handles mouse hover over a cell to show tooltip.
     * @param {Object} cellData - Data for the hovered cell.
     * @param {number} x - X coordinate of the mouse pointer.
     * @param {number} y - Y coordinate of the mouse pointer.
     */
  const handleMouseOver = (cellData, x, y) => {
    setTooltip({
        visible: true,
        content: `Speaker: ${cellData.speaker}\nText: ${cellData.text}\nValue: ${cellData.value}`,
        x: x + 10,
        y: y + 10,
    });
};

/**
 * Handles mouse leave from a cell to hide tooltip.
 */
const handleMouseLeave = () => {
    setTooltip({
        ...tooltip,
        visible: false,
    });
};

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
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
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
