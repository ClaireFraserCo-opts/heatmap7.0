// src/components/Heatmap.js
import React, { useEffect, useState } from 'react';
import { loadData } from '../utils/fetchData';

const Heatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loadedData = await loadData('/data/fileList.json');
      setData(loadedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Heatmap</h1>
      {/* Render heatmap here */}
    </div>
  );
};

export default Heatmap;
