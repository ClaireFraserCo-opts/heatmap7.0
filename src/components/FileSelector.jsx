// src/components/FileSelector.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const FileSelector = ({ onFileSelect }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await axios.get('/data/fileIndex.json');
        setFileList(response.data);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFileList();
  }, []);

  return (
    <select onChange={(e) => onFileSelect(e.target.value)}>
      <option value="">Select a file...</option>
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
