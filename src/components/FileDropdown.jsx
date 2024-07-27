import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * FileDropdown component renders a dropdown menu for selecting files.
 * @param {Object} props - Component props.
 * @param {Function} props.onFileSelect - Callback function when a file is selected.
 * @returns {JSX.Element} - Rendered component.
 */
const FileDropdown = ({ onFileSelect }) => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch file list
  const fetchFileList = async () => {
    try {
      const response = await fetch('/data/fileList.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch file list: ${response.statusText}`);
      }
      const fileList = await response.json();
      if (Array.isArray(fileList)) {
        setFileList(fileList);
      } else {
        throw new Error('Invalid file list format');
      }
    } catch (error) {
      console.error('Error fetching file list:', error);
      setError('Failed to load file list. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch file list on component mount
  useEffect(() => {
    fetchFileList();
  }, []);

  // Handle file selection
  const handleChange = (event) => {
    const selectedFile = event.target.value;
    setSelectedFile(selectedFile);
    if (onFileSelect) {
      onFileSelect(selectedFile);
    }
  };

  // Retry fetching the file list
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    fetchFileList();
  };

  if (loading) {
    return <div>Loading files...</div>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  return (
    <select value={selectedFile} onChange={handleChange}>
      <option value="" disabled>Select a file</option>
      {fileList.length === 0 ? (
        <option value="" disabled>No files available</option>
      ) : (
        fileList.map(file => (
          <option key={file.fileName} value={file.fileName}>{file.fileName}</option>
        ))
      )}
    </select>
  );
};

FileDropdown.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileDropdown;
