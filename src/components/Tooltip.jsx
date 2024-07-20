import React from 'react';
import './../styles/HeatmapComponent.css';

const Tooltip = ({ content, visible }) => {
  return (
    <div className={`tooltip ${visible ? 'visible' : ''}`}>
      {content}
    </div>
  );
};

export default Tooltip;
