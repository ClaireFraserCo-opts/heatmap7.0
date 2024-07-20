import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeatmapComponent from './components/HeatmapComponent';

function App() {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    axios.get('/data/fileList.json')
      .then(response => {
        setFileList(response.data);
      })
      .catch(error => {
        console.error('Error fetching the file list:', error);
      });
  }, []);

  const loadFileContent = (fileName) => {
    axios.get(`/data/${fileName}`)
      .then(response => {
        setFileContent(response.data);
      })
      .catch(error => {
        console.error(`Error fetching the content of ${fileName}:`, error);
      });
  };

  const handleFileChange = (event) => {
    const fileName = event.target.value;
    setSelectedFile(fileName);
    loadFileContent(fileName);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Heatmap Visualization</h1>
      </header>
      <main>
        <div>
          <select value={selectedFile} onChange={handleFileChange}>
            <option value="" disabled>Select a file</option>
            {fileList.map((fileName, index) => (
              <option key={index} value={fileName}>
                {fileName}
              </option>
            ))}
          </select>
        </div>
        <div>
          {fileContent && <HeatmapComponent data={fileContent} />}
        </div>
      </main>
    </div>
  );
}

export default App;
