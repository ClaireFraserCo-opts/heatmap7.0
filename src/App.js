import React, { useState, useEffect } from 'react';
import HeatmapComponent from '../src/components/HeatmapComponent';
import TopWordsList from '../src/components/TopWordsList';
import './App.css';  // Make sure to import your CSS file if needed

function App() {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection change
  const handleFileChange = async (event) => {
    const filePath = event.target.value;
    setSelectedFile(filePath);
    
    try {
      const response = await fetch(`/data/${filePath}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFileContent(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setFileContent(null);
    }
  };

  // Fetch the list of files (assuming fileList.json is in the public/data directory)
  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await fetch('/data/fileList.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFileList(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFileList();
  }, []);

  return (
    <div className='App'>
      <select onChange={handleFileChange} value={selectedFile}>
        <option value="">Select a file</option>
        {fileList.map(file => (
          <option key={file.filePath} value={file.filePath}>{file.fileName}</option>
        ))}
      </select>

      {error && <div className="error">{error}</div>}

      {fileContent && fileContent.length > 0 ? (
        <>
          <HeatmapComponent data={fileContent} />
          <TopWordsList data={fileContent} />
        </>
      ) : fileContent ? (
        <div>No data available for the selected file.</div>
      ) : null}
    </div>
  );
}

export default App;
