import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [fileList, setFileList] = useState([]);
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    // Fetch the fileList.json to get the names of the JSON files
    axios.get('/data/fileList.json')
      .then(response => {
        setFileList(response.data);
      })
      .catch(error => {
        console.error('Error fetching the file list:', error);
      });
  }, []);

  const loadFileContent = (fileName) => {
    // Fetch the content of the selected JSON file
    axios.get(`/data/${fileName}`)
      .then(response => {
        setFileContent(response.data);
      })
      .catch(error => {
        console.error(`Error fetching the content of ${fileName}:`, error);
      });
  };

  return (
    <div>
      <h1>File List</h1>
      <div>
        {fileList.map((fileName, index) => (
          <button key={index} onClick={() => loadFileContent(fileName)}>
            {fileName}
          </button>
        ))}
      </div>
      <div>
        <h2>File Content</h2>
        <pre>{fileContent ? JSON.stringify(fileContent, null, 2) : 'Select a file to view its content'}</pre>
      </div>
    </div>
  );
}

export default App;
