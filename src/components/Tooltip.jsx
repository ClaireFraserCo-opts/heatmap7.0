import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Tooltip.css';

const Tooltip = ({ content, visible, x, y }) => {
  return (
    visible && (
      <div className="tooltip" style={{ left: x, top: y }}>
        {content}
      </div>
    )
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Tooltip;
