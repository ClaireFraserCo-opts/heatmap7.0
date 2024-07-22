// ../utils/heatmapUtils.js
export const calculatePercentile = (value = 0, data = []) => {
  if (!Array.isArray(data) || data.length === 0) return 0;

  // Filter out items that do not have a valid `wordFrequency` property
  const filteredData = data.filter(item => item && item.wordFrequency !== undefined);

  if (filteredData.length === 0) return 0;

  const sorted = filteredData.slice().sort((a, b) => a.wordFrequency - b.wordFrequency);
  const rank = sorted.findIndex(d => d.wordFrequency >= value) + 1;

  if (rank <= 0) return 0;
  if (rank > sorted.length) return 100;

  return (rank / sorted.length) * 100;
};

export const getColorForUtterance = (utterance = {}, data = {}, colorShades) => {
  if (!utterance) return colorShades.silence;
  if (utterance.isOverlap) return colorShades.overlap;
  if (utterance.wordFrequency === undefined || utterance.wordFrequency === 0) return colorShades.silence;
  
  const percentile = calculatePercentile(utterance.wordFrequency, data.utterances || []);
  const shades = utterance.speaker === 'A' ? colorShades.speakerA : colorShades.speakerB;

  const index = Math.floor((percentile / 100) * (shades.length - 1));
  return shades[index];
};

export const getColorForWord = (word = {}, colorShades) => {
  if (!word) return colorShades.silence;

  const shades = word.speaker === 'A' ? colorShades.speakerA : colorShades.speakerB;
  
  if (word.isOverlap) return colorShades.overlap;
  if (word.confidence === undefined || word.confidence < 0.5) return colorShades.silence;

  const confidenceIndex = Math.floor(word.confidence * (shades.length - 1));
  return shades[confidenceIndex];
};
