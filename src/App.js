import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeatmapComponent from './components/HeatmapComponent';

function App() {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState(null);

  // Fetch list of files on component mount
  useEffect(() => {
    axios.get('/data/fileList.json')
      .then(response => {
        setFileList(response.data);
      })
      .catch(error => {
        setError('Error fetching the file list.');
        console.error('Error fetching the file list:', error);
      });
  }, []);

  // Load content of the selected file
  const loadFileContent = (fileName) => {
    if (!fileName) return;

    axios.get(`/data/${fileName}`)
      .then(response => {
        setFileContent(response.data);
        setError(null); // Clear any previous error
      })
      .catch(error => {
        setFileContent(null);
        setError(`Error fetching the content of ${fileName}.`);
        console.error(`Error fetching the content of ${fileName}:`, error);
      });
  };

  // Handle file selection change
  const handleFileChange = (event) => {
    const fileName = event.target.value;
    setSelectedFile(fileName);
    loadFileContent(fileName);
  };

  return (
    <div className='App'>
      <select onChange={handleFileChange} value={selectedFile}>
        <option value="">Select a file</option>
        {fileList.map(file => (
          <option key={file} value={file}>{file}</option>
        ))}
      </select>

      {/* Display error messages */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Display the heatmap if fileContent is valid */}
      {fileContent && fileContent.length > 0 ? (
        <HeatmapComponent data={fileContent} />
      ) : fileContent ? (
        <div>No data available for the selected file.</div>
      ) : null}
    </div>
  );
}

export default App;
