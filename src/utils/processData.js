// src/utils/processData.js

export const processSessionData = (files) => {
    // Example: Merge files into a single dataset and validate data structure
    return files.flatMap((file) => {
      if (!file.data) {
        console.warn('Invalid data format in file:', file);
        return [];
      }
      // You might need to process data further based on your application's requirements
      return file.data || [];
    });
  };
  