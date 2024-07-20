// ../utils/heatmapUtils.js

export const calculatePercentile = (value, data) => {
    if (!data || data.length === 0) return 0;
    
    // Sort data and find percentile rank
    const sorted = [...data].sort((a, b) => a - b);
    const index = sorted.findIndex(item => item >= value);
    
    if (index === -1) return 100;
    return (index / sorted.length) * 100;
  };
  
  
  
  export const getColor = (wordFrequency) => {
    if (wordFrequency > 80) return '#ff0000';
    if (wordFrequency > 50) return '#ff9900';
    return '#00ff00';
  };
  