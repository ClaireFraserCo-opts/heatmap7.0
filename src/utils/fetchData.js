// src/utils/fetchData.js

// import axios from 'axios';
// import { processJsonData, processUtterances, prepareHeatmapData } from './dataProcessing';
// import { calculateDurations } from './durationUtils';

// /**
//  * Fetch JSON data from the given URL.
//  * @param {string} url - The URL of the file to fetch.
//  * @returns {Promise<Object>} - The fetched JSON data.
//  */
// export async function fetchJSON(url) {
//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         console.error(`Failed to fetch ${url}: ${error.message}`);
//         throw error;
//     }
// }

// /**
//  * Fetch and process all raw data files listed in `fileList.json`.
//  * @returns {Promise<Array>} - An array of objects containing the file name and its processed data.
//  */
// export async function loadDataForHeatmap() {
//     try {
//         // Fetch the list of files from 'fileList.json'
//         const fileList = await fetchJSON('/data/fileList.json');

//         if (!Array.isArray(fileList)) {
//             throw new Error('Invalid format for file list');
//         }

//         // Filter out 'fileList.json' itself from the list
//         const files = fileList.filter(file => typeof file === 'string' && file !== 'fileList.json');

//         // Map over each file to fetch and process its data
//         const processedData = await Promise.all(files.map(async (fileName) => {
//             try {
//                 // Fetch JSON data for each file
//                 const data = await fetchJSON(`/data/${fileName}`);
                
//                 // Process the JSON data
//                 const { sessionData, wordFrequencies } = processJsonData(data);
//                 const utterances = processUtterances(sessionData.utterances);
//                 const durations = calculateDurations(utterances);
//                 const heatmapGridData = prepareHeatmapData(utterances, wordFrequencies, durations);

//                 return {
//                     fileName,
//                     heatmapData: heatmapGridData,
//                 };
//             } catch (error) {
//                 console.error(`Error processing ${fileName}:`, error.message);
//                 return { fileName, heatmapData: null }; // Return null heatmap data in case of an error
//             }
//         }));

//         // Filter out any failed processing results
//         return processedData.filter(item => item.heatmapData !== null);
//     } catch (error) {
//         console.error('Error loading data:', error.message);
//         return []; // Return an empty array in case of an error
//     }
// }
