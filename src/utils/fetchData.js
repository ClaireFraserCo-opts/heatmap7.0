// src/utils/fetchData.js
import axios from 'axios';

/**
 * Fetch JSON data from the given URL.
 * @param {string} url - The URL of the file to fetch.
 * @returns {Promise<Object>} - The fetched JSON data.
 */
export async function fetchJSON(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch ${url}: ${error.message}`);
        throw error;
    }
}

/**
 * Fetch and process all raw data files listed in `fileList.json`.
 * @returns {Promise<Array>} - An array of objects containing the file name and its processed data.
 */
export async function loadDataForHeatmap() {
    try {
        // Fetch the list of files from 'fileList.json'
        const fileList = await fetchJSON('/data/fileList.json');

        if (!Array.isArray(fileList)) {
            throw new Error('Invalid format for file list');
        }

        // Filter out 'fileList.json' itself from the list
        const files = fileList.filter(file => typeof file === 'string' && file !== 'fileList.json');

        // Map over each file to fetch and process its data
        const dataPromises = files.map(async (file) => {
            try {
                // Fetch JSON data for each file
                const data = await fetchJSON(`/data/${file}`);
                return { fileName: file, data };
            } catch (error) {
                console.error(`Error fetching data for ${file}:`, error.message);
                return { fileName: file, data: null };
            }
        });

        // Await all promises and return the result
        return Promise.all(dataPromises);
    } catch (error) {
        console.error('Error loading data:', error.message);
        throw new Error('Failed to load data for heatmap. Please try again later.');
    }
}
