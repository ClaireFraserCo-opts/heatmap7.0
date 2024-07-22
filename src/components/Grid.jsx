// ../components/Grid.jsx

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { calculatePercentile } from '../utils/heatmapUtils';
import { colorShades } from '../utils/colorShades'; // Adjust the path as necessary

const Grid = ({ data, cellWidth, cellHeight, setTooltip }) => {
  useEffect(() => {
    const svg = d3.select('#heatmapGrid')
      .attr('width', '100%')
      .attr('height', '100%');

    svg.selectAll('*').remove(); // Clear previous content

    svg.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', d => d.x - cellWidth / 2)  // Center rectangles horizontally
      .attr('y', d => d.y - cellHeight / 2) // Center rectangles vertically
      .attr('width', cellWidth)
      .attr('height', cellHeight)
      .attr('rx', 5)  // Rounded corners
      .attr('ry', 5)  // Rounded corners
      .style('fill', d => d.color || colorShades.silence)
      .style('opacity', 0.6)
      .style('stroke', d => d.color === colorShades.overlap ? 'black' : 'none')
      .style('stroke-width', d => d.color === colorShades.overlap ? 1 : 0)
      .on('mouseover', (event, d) => {
        setTooltip({
          visible: true,
          content: `Speaker: ${d.speaker || 'N/A'}, Frequency: ${d.value}, Percentile: ${calculatePercentile(d.value, data.map(item => item.value))}`,
          x: event.pageX,
          y: event.pageY
        });
      })
      .on('mouseout', () => {
        setTooltip({ visible: false, content: '', x: 0, y: 0 });
      });
  }, [data, cellWidth, cellHeight, setTooltip]);

  return (
    <svg id="heatmapGrid" className="heatmap-grid" style={{ width: '100%', height: '100%' }}>
      {/* The grid will be rendered using D3.js */}
    </svg>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string, // Remove `isRequired` if color is not always present
    value: PropTypes.number,
    speaker: PropTypes.string.isRequired,
    index: PropTypes.number, // Optional if not used
    isOverlap: PropTypes.bool
  })).isRequired,
  cellWidth: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
  setTooltip: PropTypes.func.isRequired,
};

export default Grid;
