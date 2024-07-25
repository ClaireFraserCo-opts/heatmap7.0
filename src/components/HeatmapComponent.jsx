import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { processUtterances, calculateWordFrequencies, prepareHeatmapData, initializeGrid } from '../utils/dataProcessing';
import Tooltip from './Tooltip';
import Grid from './Grid';
import './../styles/HeatmapComponent.css';
import { getColorForCell } from '../utils/colorShades'; // Ensure this is correctly imported

// Define cell dimensions
const cellWidth = 12;
const cellHeight = Math.round(cellWidth * 1.618);
const duration = 2405; // Duration of the heatmap in seconds

const HeatmapComponent = ({ data }) => {
  console.log('Heatmap data:', data); // Debug statement

  if (!data || data.length === 0) return <div>No heatmap data available.</div>;

  const [heatmapData, setHeatmapData] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8
  });

  const processData = useCallback(async () => {
    try {
      // Process utterances and heatmap data
      const utterances = processUtterances(data);
      const wordFrequencies = calculateWordFrequencies(utterances);
      const processedHeatmapData = prepareHeatmapData(utterances, wordFrequencies);
      
      // Initialize grid
      const grid = initializeGrid(processedHeatmapData, cellWidth, cellHeight, duration);
      setHeatmapData(grid);
    } catch (error) {
      console.error('Error processing data:', error);
    }
  }, [data]);

  useEffect(() => {
    processData();
  }, [processData]);

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Prepare grid data for rendering
  const processGridData = () => {
    if (!heatmapData.length) return [];

    const { width, height } = containerSize;
    const numCellsX = Math.floor(width / cellWidth);
    const numCellsY = Math.floor(height / cellHeight);

    return new Array(numCellsX * numCellsY).fill().map((_, index) => {
      const item = heatmapData[index % heatmapData.length] || {};
      return {
        ...item,
        x: (index % numCellsX) * cellWidth + cellWidth / 2,
        y: Math.floor(index / numCellsX) * cellHeight + cellHeight / 2,
        color: item.utterance ? getColorForCell(item.utterance) : '#FFFFFF',
        value: item.utterance ? item.utterance.wordFrequency || 0 : 0,
        speaker: item.utterance ? item.utterance.speaker || '' : ''
      };
    });
  };

  const processedData = processGridData();

  return (
    <div style={{ position: 'relative', width: containerSize.width, height: containerSize.height }}>
      <h2>Heatmap</h2>
      <div className="heatmap-container">
        {data.map((item, index) => (
          <div key={index} className="heatmap-item">
            <div>Start: {item.start}</div>
            <div>End: {item.end}</div>
            <div>Text: {item.text}</div>
            <div>Confidence: {item.confidence}</div>
          </div>
        ))}
      </div>
      <Grid data={processedData} containerSize={containerSize} cellWidth={cellWidth} cellHeight={cellHeight} setTooltip={setTooltip} />
      <Tooltip content={tooltip.content} visible={tooltip.visible} x={tooltip.x} y={tooltip.y} />
    </div>
  );
};

// Define prop types to match the data structure
HeatmapComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    confidence: PropTypes.number
  })).isRequired,
};

export default HeatmapComponent;
