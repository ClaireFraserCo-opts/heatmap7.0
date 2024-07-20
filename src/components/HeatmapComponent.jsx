import React, { useEffect, useState } from 'react';
import { calculatePercentile } from '../utils/heatmapUtils'; // Ensure this function is correct
import Tooltip from './Tooltip';
import './../styles/HeatmapComponent.css';
import Grid from './Grid';

const colorShades = {
  speakerA: ['#d9ffd9', '#b2ffb2', '#8cff8c', '#66ff66', '#40ff40', '#19ff19', '#00ff00'],
  speakerB: ['#ffe5e5', '#ffc7c8', '#e69293', '#e67c7e', '#e66163', '#e64548', '#e6292d'],
  silence: '#808080',
  overlap: '#ff0000'
};

const HeatmapComponent = ({ data }) => {
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });

  // Define cell dimensions
  const cellWidth = 20; // Fixed width
  const cellHeight = Math.round(cellWidth * 1.618); // Calculate height
  // cellHeight ≈ 32
  

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial call to set size

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const getColorForUtterance = (utterance) => {
    if (!utterance) return colorShades.silence;

    const percentile = calculatePercentile(utterance.wordFrequency, data.utterances);
    const shades = utterance.speaker === 'A' ? colorShades.speakerA : colorShades.speakerB;

    if (utterance.isOverlap) return colorShades.overlap;
    if (utterance.wordFrequency === 0) return colorShades.silence;

    // Return color based on percentile (0 to 100 scale)
    const index = Math.floor((percentile / 100) * (shades.length - 1));
    return shades[index];
  };

  const processGridData = () => {
    if (!data || !data.utterances) return [];

    const { width, height } = containerSize;

    // Define the number of cells
    const numCellsX = Math.floor(width / cellWidth);
    const numCellsY = Math.floor(height / cellHeight);

    // Map data to grid cells
    const processedGrid = new Array(numCellsX * numCellsY).fill().map((_, index) => {
      const utterance = data.utterances[index % data.utterances.length];
      return {
        ...utterance,
        color: getColorForUtterance(utterance),
      };
    });

    // Map processed grid to heatmap data
    const heatmapData = processedGrid.map((cell, index) => ({
      x: (index % numCellsX) * cellWidth + cellWidth / 2,
      y: Math.floor(index / numCellsX) * cellHeight + cellHeight / 2,
      color: cell.color,
      value: cell.wordFrequency,
      speaker: cell.speaker,
    }));

    return { heatmapData };
  };

  const { heatmapData } = processGridData() || {};

  return (
    <div style={{ position: 'relative', width: containerSize.width, height: containerSize.height }}>
      <Grid
        data={heatmapData}
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
