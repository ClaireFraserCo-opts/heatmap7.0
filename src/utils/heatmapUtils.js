// ../utils/heatmapUtils.js

import { colorShades } from './colorShades'; // Adjust the path as necessary

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

export const getColorForUtterance = (utterance = {}, data = {}) => {
  if (!utterance) return colorShades.silence;
  if (utterance.isOverlap) return colorShades.overlap;
  if (utterance.wordFrequency === undefined || utterance.wordFrequency === 0) return colorShades.silence;
  
  const percentile = calculatePercentile(utterance.wordFrequency, data.utterances || []);
  let shades;

  // Determine color shades based on speaker type
  switch (utterance.speaker) {
    case 'A':
      shades = colorShades.speakerA;
      break;
    case 'B':
      shades = colorShades.speakerB;
      break;
    case 'C':
      shades = colorShades.speakerC;
      break;
    case 'D':
      shades = colorShades.speakerD;
      break;
    default:
      shades = [colorShades.silence]; // Default to silence if speaker type is unknown
  }

  const index = Math.floor((percentile / 100) * (shades.length - 1));
  console.log(`Utterance Color: ${shades[index]}`); // Debugging
  return shades[index];
};

export const getColorForWord = (word = {}) => {
  if (!word) return colorShades.silence;

  let shades;

  // Determine color shades based on speaker type
  switch (word.speaker) {
    case 'A':
      shades = colorShades.speakerA;
      break;
    case 'B':
      shades = colorShades.speakerB;
      break;
    case 'C':
      shades = colorShades.speakerC;
      break;
    case 'D':
      shades = colorShades.speakerD;
      break;
    default:
      shades = [colorShades.silence]; // Default to silence if speaker type is unknown
  }
  
  if (word.isOverlap) return colorShades.overlap;
  if (word.confidence === undefined || word.confidence < 0.5) return colorShades.silence;

  const confidenceIndex = Math.floor(word.confidence * (shades.length - 1));
  console.log(`Word Color: ${shades[confidenceIndex]}`); // Debugging
  return shades[confidenceIndex];
};

// export const getColorForSpeaker = (speaker) => {
//   switch (speaker) {
//     case 'A':
//       return colorShades.speakerA[Math.floor(Math.random() * colorShades.speakerA.length)];
//     case 'B':
//       return colorShades.speakerB[Math.floor(Math.random() * colorShades.speakerB.length)];
//     case 'C':
//       return colorShades.speakerC[Math.floor(Math.random() * colorShades.speakerC.length)];
//     case 'D':
//       return colorShades.speakerD[Math.floor(Math.random() * colorShades.speakerD.length)];
//     default:
//       return colorShades.silence;
//   }
// };
