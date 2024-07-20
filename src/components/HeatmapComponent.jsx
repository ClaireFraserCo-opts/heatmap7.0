import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { processSessionData } from '../utils/processData';
import { calculatePercentile } from '../utils/heatmapUtils'; // Adjust import path if needed
import Tooltip from './Tooltip';
import './../styles/HeatmapComponent.css';

const colorShades = {
  speakerA: ['#d9ffd9', '#b2ffb2', '#8cff8c', '#66ff66', '#40ff40', '#19ff19', '#00ff00'],
  speakerB: ['#ffe5e5', '#ffc7c8', '#e69293', '#e67c7e', '#e66163', '#e64548', '#e6292d'],
  silence: '#808080',
  overlap: '#ff0000'
};

const HeatmapComponent = ({ data }) => {
  const [tooltip, setTooltip] = useState({ visible: false, content: '' });
  const [containerSize, setContainerSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });

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

    // Calculate cell size and number of cells
    const cellSize = 12; // Fixed cell size for better visualization
    const numCellsX = Math.floor(width / cellSize);
    const numCellsY = Math.floor(height / cellSize);

    const processedGrid = new Array(numCellsX * numCellsY).fill().map((_, index) => {
      const utterance = data.utterances[index % data.utterances.length];
      return {
        ...utterance,
        color: getColorForUtterance(utterance),
      };
    });

    const heatmapData = processedGrid.map((cell, index) => ({
      x: (index % numCellsX) * cellSize,
      y: Math.floor(index / numCellsX) * cellSize,
      color: cell.color,
      value: cell.wordFrequency,
    }));

    return { heatmapData, cellSize };
  };

  const { heatmapData, cellSize } = processGridData() || {};

  return (
    <div style={{ position: 'relative', width: containerSize.width, height: containerSize.height }}>
      <svg width={containerSize.width} height={containerSize.height}>
        {heatmapData && heatmapData.map((cell, index) => (
          <rect
            key={index}
            x={cell.x}
            y={cell.y}
            width={cellSize}
            height={cellSize}
            fill={cell.color}
            stroke={cell.color === colorShades.overlap ? 'black' : 'none'}
            strokeWidth={cell.color === colorShades.overlap ? 1 : 0}
            onMouseOver={() => setTooltip({ visible: true, content: `Speaker: ${cell.speaker}, Frequency: ${cell.value}` })}
            onMouseOut={() => setTooltip({ visible: false, content: '' })}
          />
        ))}
      </svg>
      <Tooltip content={tooltip.content} visible={tooltip.visible} />
    </div>
  );
};

export default HeatmapComponent;
