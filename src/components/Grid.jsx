import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { getColorForCell } from '../utils/colorShades';

const Grid = ({ data, cellWidth, cellHeight, setTooltip }) => {
  useEffect(() => {
    const svg = d3.select('#heatmapGrid')
      .attr('width', '100%')
      .attr('height', '100%');

    svg.selectAll('*').remove();

    svg.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', cellWidth)
      .attr('height', cellHeight)
      .attr('rx', 5)
      .attr('ry', 5)
      .style('fill', d => getColorForCell(d))
      .style('opacity', 0.6)
      .style('stroke', d => d.isOverlap ? 'black' : 'none')
      .style('stroke-width', d => d.isOverlap ? 1 : 0)
      .on('mouseover', (event, d) => {
        setTooltip({
          visible: true,
          content: `Speaker: ${d.speaker || 'N/A'}, Confidence: ${d.confidence || 'N/A'}, Sentiment: ${d.sentiment || 'N/A'}, Percentile: ${d.percentile || 'N/A'}`,
          x: event.pageX,
          y: event.pageY
        });
      })
      .on('mouseout', () => setTooltip({ visible: false, content: '', x: 0, y: 0 }))
      .on('click', (event, d) => {
        if (d.wordFrequency === 'X') {
          // Handle single click to open a summary widget
        }
      })
      .on('dblclick', (event, d) => {
        if (d.wordFrequency === 'X') {
          // Handle double click to send a message to the container
        }
      });
  }, [data, cellWidth, cellHeight, setTooltip]);

  return (
    <svg id="heatmapGrid" className="heatmap-grid" style={{ width: '100%', height: '100%' }}>
    </svg>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    confidence: PropTypes.number,
    sentiment: PropTypes.string,
    percentile: PropTypes.number,
    speaker: PropTypes.string.isRequired,
    isOverlap: PropTypes.bool,
    wordFrequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  cellWidth: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
  setTooltip: PropTypes.func.isRequired,
};

export default Grid;
