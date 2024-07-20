import React from 'react';
import './../styles/HeatmapComponent.css';

const Tooltip = ({ content, visible, x, y }) => {
  return (
    visible ? (
      <div className="tooltip" style={{ left: x + 10, top: y + 10 }}>
        {content}
      </div>
    ) : null
  );
};

export default Tooltip;
