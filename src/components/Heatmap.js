// src/components/Heatmap.js
import React, { useEffect } from 'react';
import h337 from 'heatmap.js';

const Heatmap = ({ data }) => {
    useEffect(() => {
      if (!data || !data.utterances) return;
  
      const generateHeatmapData = (utterances) => {
        const heatmapData = utterances.map((utterance, index) => ({
          x: index * 10,  // Example x coordinate
          y: utterance.density * 10,  // Example y coordinate based on density
          value: utterance.score // Heatmap intensity based on score
        }));
    
        return {
          max: Math.max(...utterances.map(u => u.score)),
          data: heatmapData
        };
      };
  
      const heatmapData = generateHeatmapData(data.utterances);
  
      const heatmapInstance = h337.create({
        container: document.querySelector('#heatmapContainer'),
        radius: 20
      });
  
      heatmapInstance.setData(heatmapData);
    }, [data]);
  
    return <div id="heatmapContainer" style={{ width: '600px', height: '400px' }}></div>;
  };
// 1st
// const Heatmap = ({ utterances }) => {
//   useEffect(() => {
//     const generateHeatmapData = (utterances) => {
//       const heatmapData = utterances.map((utterance, index) => ({
//         x: index * 10, // Example x coordinate
//         y: utterance.density * 10, // Example y coordinate based on density
//         value: utterance.score // Heatmap intensity based on score
//       }));

//       return {
//         max: Math.max(...utterances.map(u => u.score)),
//         data: heatmapData
//       };
//     };

//     const heatmapInstance = h337.create({
//       container: document.getElementById('heatmapContainer'),
//       radius: 20
//     });

//     const heatmapData = generateHeatmapData(utterances);
//     heatmapInstance.setData(heatmapData);
//   }, [utterances]);

//   return <div id="heatmapContainer" style={{ width: '600px', height: '400px' }}></div>;
// };

export default Heatmap;
