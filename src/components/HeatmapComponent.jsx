import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { processUtterances, calculateWordFrequencies, prepareHeatmapData } from '../utils/dataProcessing';
import { processType1Data, processType2Data, mergeAndSortData } from '../utils/dataProcessing';
import { initializeGrid } from '../utils/gridUtils';
import { getColorForCell } from '../utils/colorShades';
import { generateHeatmapData } from '../utils/heatmapUtils';
import Tooltip from './Tooltip';
import Grid from './Grid';
import './../styles/HeatmapComponent.css';

const HeatmapComponent = ({ data, type1Data, type2Data }) => {
  const [heatmapData, setHeatmapData] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });

  // Define cell dimensions
  const cellWidth = 12;
  const cellHeight = Math.round(cellWidth * 1.618);
  const duration = 2405;

  useEffect(() => {
    // Process and merge data
    const processedType1 = processType1Data(type1Data); // Ensure these functions are correctly imported
    const processedType2 = processType2Data(type2Data);
    const mergedData = mergeAndSortData(processedType1, processedType2);

    // Generate heatmap data
    setHeatmapData(generateHeatmapData(mergedData));
  }, [type1Data, type2Data]);

  useEffect(() => {
    // Process data when the component mounts or data changes
    const processData = async () => {
      try {
        console.log('Received data in HeatmapComponent:', data); // Log received data
        const utterances = processUtterances(data);
        console.log('Processed utterances:', utterances); // Debugging log
        const wordFrequencies = calculateWordFrequencies(utterances);
        console.log('Word frequencies:', wordFrequencies); // Debugging log
        const heatmapData = prepareHeatmapData(utterances, wordFrequencies);
        console.log('Heatmap data:', heatmapData); // Debugging log
        const grid = initializeGrid(heatmapData, cellWidth, cellHeight, duration);
        console.log('Initialized grid:', grid); // Debugging log
        setHeatmapData(grid);
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };

    processData();
  }, [data]);

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const processGridData = () => {
    if (!heatmapData || !heatmapData.length) return [];

    const { width, height } = containerSize;
    const numCellsX = Math.floor(width / cellWidth);
    const numCellsY = Math.floor(height / cellHeight);

    const processedGrid = new Array(numCellsX * numCellsY).fill().map((_, index) => {
      const item = heatmapData[index % heatmapData.length] || {};
      return {
        ...item,
        color: item.utterance
          ? getColorForCell(item.utterance) // Updated to use getColorForCell
          : '#FFFFFF', // Default color for empty cells
      };
    });

    return processedGrid.map((cell, index) => ({
      x: (index % numCellsX) * cellWidth + cellWidth / 2,
      y: Math.floor(index / numCellsX) * cellHeight + cellHeight / 2,
      color: cell.color,
      value: cell.utterance ? cell.utterance.wordFrequency || 0 : 0,
      speaker: cell.utterance ? cell.utterance.speaker || '' : '',
    }));
  };

  const processedData = processGridData();
  console.log('Processed grid data:', processedData); // Debugging log

  return (
    <div style={{ position: 'relative', width: containerSize.width, height: containerSize.height }}>
      <Grid
        data={processedData}
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

HeatmapComponent.propTypes = {
  data: PropTypes.array.isRequired,
  type1Data: PropTypes.array, // Assuming these are arrays; adjust if different
  type2Data: PropTypes.array, // Assuming these are arrays; adjust if different
};

export default HeatmapComponent;
