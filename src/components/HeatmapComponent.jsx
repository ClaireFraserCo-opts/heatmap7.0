import React, { useEffect, useState } from 'react';
import h337 from 'heatmap.js';

const HeatmapComponent = ({ data }) => {
  const [heatmapGrid, setHeatmapGrid] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 380, height: 960 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth * 0.8, // Example: 80% of window width
        height: window.innerHeight * 0.8, // Example: 80% of window height
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial call to set size

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  useEffect(() => {
    if (!data || !data.utterances) return;

    const { width, height } = containerSize;

    // Use Phi algorithm to calculate cell size
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const cellSizeX = width / (Math.floor(width / (height / phi)));
    const cellSizeY = height / (Math.floor(height / (width / phi)));
    const cellSize = Math.min(cellSizeX, cellSizeY);
    const cellRadius = Math.floor(cellSize / 2);

    const numCellsX = Math.floor(width / cellSize);
    const numCellsY = Math.floor(height / cellSize);
    const totalCells = numCellsX * numCellsY;

    const initialGrid = new Array(totalCells).fill().map(() => ({
      speaker: null,
      wordFrequency: 0,
      percentile: 0,
      color: '#fff',
    }));

    const processedGrid = initialGrid.map((cell, index) => {
      const utterance = data.utterances[index % data.utterances.length];
      return {
        speaker: utterance.speaker || null,
        wordFrequency: utterance.wordFrequency || 0,
        percentile: calculatePercentile(utterance.wordFrequency, data.utterances),
        color: getColor(utterance.wordFrequency),
      };
    });

    setHeatmapGrid(processedGrid);

    const heatmapData = processedGrid.map((cell, index) => ({
      x: (index % numCellsX) * cellSize + cellRadius,
      y: Math.floor(index / numCellsX) * cellSize + cellRadius,
      value: cell.wordFrequency,
    }));

    const heatmapInstance = h337.create({
      container: document.getElementById('heatmapContainer'),
      radius: cellRadius,
    });

    heatmapInstance.setData({
      max: Math.max(...processedGrid.map(cell => cell.wordFrequency)),
      data: heatmapData,
    });
  }, [data, containerSize]);

  const calculatePercentile = (value, utterances) => {
    const sorted = utterances.map(u => u.wordFrequency).sort((a, b) => a - b);
    const rank = sorted.indexOf(value) + 1;
    return (rank / sorted.length) * 100;
  };

  const getColor = (wordFrequency) => {
    if (wordFrequency > 80) return '#ff0000';
    if (wordFrequency > 50) return '#ff9900';
    return '#00ff00';
  };

  return (
    <div>
      <div id="heatmapContainer" style={{ width: '100%', height: '100%' }}></div>
      <div>
        <h2>Heatmap Grid Debug</h2>
        <pre>{JSON.stringify(heatmapGrid, null, 2)}</pre>
      </div>
    </div>
  );
};

export default HeatmapComponent;
