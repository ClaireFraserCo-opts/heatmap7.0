import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Tooltip.css';

const Tooltip = ({content, visible, x, y }) => {
  const adjustedX = Math.min(window.innerWidth - 150, Math.max(0, x)); // Adjust for width of tooltip
  const adjustedY = Math.min(window.innerHeight - 50, Math.max(0, y)); // Adjust for height of tooltip

  
  return (
    visible && (
      <div
  className="tooltip"
  style={{ left: x, top: y }}
  role="tooltip"
  aria-hidden={!visible}
>
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
