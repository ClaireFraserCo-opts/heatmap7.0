export const calculatePercentile = (value, utterances) => {
    const sorted = utterances.map(u => u.wordFrequency).sort((a, b) => a - b);
    const rank = sorted.indexOf(value) + 1;
    return (rank / sorted.length) * 100;
  };
  
  export const getColor = (wordFrequency) => {
    if (wordFrequency > 80) return '#ff0000';
    if (wordFrequency > 50) return '#ff9900';
    return '#00ff00';
  };
  