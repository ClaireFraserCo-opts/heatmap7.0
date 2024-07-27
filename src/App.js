import React, { useState } from 'react';
import HeatmapContainer from './components/HeatmapContainer';
import HeatmapComponent from './components/HeatmapComponent';
import FileSelector from './components/FileSelector';
import './App.css';

/**
 * Main App component that handles file selection and data visualization.
 * @returns {JSX.Element} - Rendered component.
 */
function App() {
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState(null);

  /**
   * Handles the file selection and fetches the file data.
   * @param {string} fileName - The name of the selected file.
   */
  const handleFileChange = async (fileName) => {
    console.log(`Selected file: ${fileName}`);

    try {
      const response = await fetch(`/data/${fileName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('File Content:', data);

      // Validate the structure of the data
      if (data.utterances && Array.isArray(data.utterances)) {
        setFileContent(data);
        setError(null);
      } else {
        throw new Error('Data is not in the expected format');
      }
    } catch (error) {
      console.error(`Error loading file: ${error.message}`);
      setError(`Error loading file: ${error.message}`);
      setFileContent(null);
    }
  };

  return (
    <div className='App'>
      <HeatmapContainer /> {/* Ensure this component is used appropriately */}
      <FileSelector onFileSelect={handleFileChange} />

      {error && <div className="error">{error}</div>}

      {fileContent && fileContent.utterances && fileContent.utterances.length > 0 ? (
        <HeatmapComponent data={fileContent.utterances} />
      ) : fileContent ? (
        <div>No data available for the selected file.</div>
      ) : null}
    </div>
  );
}

export default App;
