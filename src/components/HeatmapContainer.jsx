// src/components/HeatmapContainer.jsx

import React, { useEffect, useState, useRef } from 'react';
import FileDropdown from './FileDropdown';
import HeatmapComponent from './HeatmapComponent';
import { loadDataForHeatmap } from '../utils/dataProcessing'; // Ensure this function is correctly imported

/**
 * HeatmapContainer component to manage the state and pass necessary props to HeatmapComponent.
 * @returns {JSX.Element} - Rendered component.
 */
const HeatmapContainer = () => {
  const [tooltip, setTooltip] = useState({ content: '', visible: false, x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [heatmapData, setHeatmapData] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setContainerSize({ width: clientWidth, height: clientHeight });
    }
  }, [containerRef.current]);

  const handleFileSelect = async (fileName) => {
    try {
      // Fetch and process data for all files (if that's what the function is designed for)
      const data = await loadDataForHeatmap(); // Fetch and process data based on fileName
      setHeatmapData(data);
    } catch (error) {
      console.error('Error fetching heatmap data:', error);
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {containerSize.width > 0 && containerSize.height > 0 && (
        <>
          <FileDropdown onFileSelect={handleFileSelect} />
          {heatmapData && (
            <HeatmapComponent
              data={heatmapData}
              containerSize={containerSize}
              cellWidth={10}
              cellHeight={10}
              setTooltip={setTooltip}
              tooltip={tooltip}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HeatmapContainer;
