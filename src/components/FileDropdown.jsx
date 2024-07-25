import React, { useState, useEffect } from 'react';

// Dropdown component
const FileDropdown = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  // Fetch file list on component mount
  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await fetch('/data/fileIndex.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch file index: ${response.statusText}`);
        }
        const fileIndex = await response.json();
        setFileList(fileIndex.map(file => file.fileName));
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFileList();
  }, []);

  // Handle file selection
  const handleChange = (event) => {
    setSelectedFile(event.target.value);
    // Perform actions based on selected file
  };

  return (
    <select value={selectedFile} onChange={handleChange}>
      <option value="" disabled>Select a file</option>
      {fileList.map(file => (
        <option key={file} value={file}>{file}</option>
      ))}
    </select>
  );
};

export default FileDropdown;
