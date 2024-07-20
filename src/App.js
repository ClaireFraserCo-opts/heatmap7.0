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
      <select onChange={handleFileChange} value={selectedFile}>
        <option value="">Select a file</option>
        {fileList.map(file => (
          <option key={file} value={file}>{file}</option>
        ))}
      </select>
      {fileContent && <HeatmapComponent data={fileContent} />}
    </div>
  );
}

export default App;
