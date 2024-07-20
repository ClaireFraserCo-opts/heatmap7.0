import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './../styles/HeatmapComponent.css';

const Grid = ({ data, cellRadius, setTooltip }) => {
  useEffect(() => {
    const svg = d3.select('#heatmapGrid')
      .attr('width', '100%')
      .attr('height', '100%');

    svg.selectAll('*').remove(); // Clear previous content

    svg.selectAll('circle')
      .data(data)
      .enter().append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', cellRadius)
      .style('fill', d => d.color)
      .style('opacity', 0.6)
      .on('mouseover', (event, d) => {
        setTooltip({ visible: true, content: `Speaker: ${d.speaker || 'N/A'}, Frequency: ${d.value}, Percentile: ${d.percentile || 'N/A'}` });
      })
      .on('mouseout', () => {
        setTooltip({ visible: false, content: '' });
      });
  }, [data, cellRadius, setTooltip]);

  return (
    <svg id="heatmapGrid" style={{ width: '100%', height: '100%' }}>
      {/* The grid will be rendered using D3.js */}
    </svg>
  );
};

export default Grid;
