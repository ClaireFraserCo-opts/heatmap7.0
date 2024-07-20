import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './../styles/HeatmapComponent.css';

const Grid = ({ data, cellWidth, cellHeight, setTooltip }) => {
  useEffect(() => {
    const svg = d3.select('#heatmapGrid')
      .attr('width', '100%')
      .attr('height', '100%');

    svg.selectAll('*').remove(); // Clear previous content

    svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
  .attr('x', d => d.x - cellWidth / 2)
  .attr('y', d => d.y - cellHeight / 2)
  .attr('width', cellWidth)
  .attr('height', cellHeight)
  .attr('rx', 5)  // Rounded corners
  .attr('ry', 5)  // Rounded corners
  .attr('class', d => d.color === '#ff0000' ? 'highlight' : '') // Apply CSS class
  .style('fill', d => d.color)
  .style('opacity', 0.6)
  .on('mouseover', (event, d) => {
    setTooltip({
      visible: true,
      content: `Speaker: ${d.speaker || 'N/A'}, Frequency: ${d.value}, Percentile: ${d.percentile || 'N/A'}`,
      x: event.pageX,
      y: event.pageY
    });
  })
  .on('mouseout', () => {
    setTooltip({ visible: false, content: '' });
  });

  }, [data, cellWidth, cellHeight, setTooltip]);

  return (
    <svg id="heatmapGrid" style={{ width: '100%', height: '100%' }}>
      {/* The grid will be rendered using D3.js */}
    </svg>
  );
};

export default Grid;
