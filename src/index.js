// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { loadDataForHeatmap } from './utils/dataProcessing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Load and process data
// loadDataForHeatmap().then((data) => {
//   console.log('Data loaded:', data);
//   // Ensure that this data is used correctly in components if needed
// }).catch((error) => {
//   console.error('Error loading data:', error);
// });

reportWebVitals();
