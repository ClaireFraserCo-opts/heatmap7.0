// src/utils/dataProcessing.js

export const loadDataForHeatmap = async () => {
  try {
    const response = await fetch('/data/fileList.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch file list: ${response.statusText}`);
    }
    const fileList = await response.json();
    if (!Array.isArray(fileList)) {
      throw new Error('Invalid file list format');
    }

    const dataPromises = fileList.map(async (fileName) => {
      const fileResponse = await fetch(`/data/${fileName}`);
      if (!fileResponse.ok) {
        throw new Error(`Failed to fetch data from file: ${fileName}`);
      }
      return await fileResponse.json();
    });

    const data = await Promise.all(dataPromises);
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
};
