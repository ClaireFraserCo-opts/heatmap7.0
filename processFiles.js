const fs = require('fs');
const path = require('path');

// Define the directory and file list
const dataDir = './public/data';
const fileListPath = path.join(dataDir, 'fileList.json');

// Read the file list
const fileList = JSON.parse(fs.readFileSync(fileListPath, 'utf-8'));

// Function to process a single file and extract the necessary information
const processFile = (filePath) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const roundToNearestSecond = (time) => Math.round(time);
  
  if ('utterances' in data && 'words' in data) {
    // Type 1 File
    data.utterances.forEach(utterance => {
        utterance.start = roundToNearestSecond(utterance.start);
        utterance.end = roundToNearestSecond(utterance.end);
    });
    return {
      type: 'Type 1',
      utterances: data.utterances,
      words: data.words
    };
  } else if ('language_code' in data && 'words' in data) {
    // Type 2 File
    data.utterances.forEach(utterance => {
        utterance.start = roundToNearestSecond(utterance.start);
        utterance.end = roundToNearestSecond(utterance.end);
    });
    return {
      type: 'Type 2',
      utterances: data.utterances,
      words: data.words
    };
  } else {
    throw new Error(`Unknown file structure: ${filePath}`);
  }
};

// Process all files in the file list
fileList.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  try {
    const result = processFile(filePath);
    console.log(`Processed ${fileName}:`, result);
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error.message);
  }
});
