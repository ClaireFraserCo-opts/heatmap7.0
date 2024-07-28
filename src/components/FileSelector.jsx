// src/components/FileSelector.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Component for selecting a file from a list of available files.
 * @param {Function} onFileSelect - Callback function to handle file selection.
 * @returns {JSX.Element} - The rendered component.
 */
const FileSelector = ({ onFileSelect }) => {
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Fetches the list of files from 'fileList.json' and updates the component state.
         */
        const fetchFileList = async () => {
            try {
                const response = await axios.get('/data/fileList.json');
                console.log('File list response:', response.data);

                if (Array.isArray(response.data)) {
                    setFileList(response.data);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching file list:', error);
                setError('Failed to load file list. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchFileList();
    }, []);

    if (loading) return <p>Loading file list...</p>;
    if (error) return (
        <div>
            <p>{error}</p>
            <button onClick={() => fetchFileList()}>Retry</button>
        </div>
    );

    return (
        <select onChange={(e) => onFileSelect(e.target.value)} defaultValue="">
            <option value="" disabled>Select a file...</option>
            {fileList.map((file) => (
                <option key={file} value={file}>
                    {file}
                </option>
            ))}
        </select>
    );
};

export default FileSelector;
