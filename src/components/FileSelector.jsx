// src/components/FileSelector.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const FileSelector = ({ onFileSelect }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get('/data/fileIndex.json');
        setFileList(response.data);
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
  if (error) return <p>{error}</p>;

  return (
    <select onChange={(e) => onFileSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Select a file...</option>
      {fileList.map((file) => (
        <option key={file.fileName} value={file.fileName}>
          {file.fileName}
        </option>
      ))}
    </select>
  );
};

FileSelector.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileSelector;
