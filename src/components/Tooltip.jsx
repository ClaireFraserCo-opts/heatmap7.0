import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Tooltip.css';

const Tooltip = ({ content, visible, x, y }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '5px',
        zIndex: 1000,
      }}
    >
      {content}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Tooltip;