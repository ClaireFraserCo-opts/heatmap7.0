import React, { useEffect, useCallback, useRef } from "react";
// import PropTypes from 'prop-types';
import * as d3 from "d3";
import { getColorForUtterance } from "../utils/colorShades";

/**
 * Grid component renders a heatmap grid using D3.js.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data to be visualized in the grid.
 * @param {number} props.cellWidth - Width of each cell in the grid.
 * @param {number} props.cellHeight - Height of each cell in the grid.
 * @param {Function} props.setTooltip - Function to set the tooltip visibility and content.
 * @returns {JSX.Element} - Rendered component.
 */
const Grid = ({ data, containerSize, cellWidth, cellHeight, setTooltip }) => {
  const svgRef = useRef(null);

  // Handle mouse over event to show tooltip
  const handleMouseOver = useCallback(
    (event, d) => {
      setTooltip({
        visible: true,
        content: `Speaker: ${d.speaker || "N/A"}, Confidence: ${d.confidence || "N/A"}, Sentiment: ${d.sentiment || "N/A"}, Percentile: ${d.percentile || "N/A"}`,
        x: event.pageX,
        y: event.pageY,
      });
    },
    [setTooltip]
  );

  // Handle mouse out event to hide tooltip
  const handleMouseOut = useCallback(() => {
    setTooltip({ visible: false, content: "", x: 0, y: 0 });
  }, [setTooltip]);

  // Handle click event (if needed)
  const handleClick = useCallback((event, d) => {
    if (d.wordFrequency === "X") {
      console.log("Single click on:", d);
    }
  }, []);

  // Handle double click event (if needed)
  const handleDblClick = useCallback((event, d) => {
    if (d.wordFrequency === "X") {
      console.log("Double click on:", d);
    }
  }, []);

  // Function to draw the grid
  const drawGrid = useCallback(() => {
    console.log('data for grid:', data)
    const svg = d3
      .select(svgRef.current)
      .attr("width", containerSize.width)
      .attr("height", containerSize.height);

    // Remove existing elements
    svg.selectAll("*").remove();

    // Bind data to rectangles
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", cellWidth)
      .attr("height", cellHeight)
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", (d) => {
        const color = getColorForUtterance(d);
        // console.log("Cell data:", d); // Debug statement
        // console.log("Calculated color:", color); // Debug statement
        return color;
      })
      .style("opacity", 0.6)
      .style("stroke", (d) => (d.isOverlap ? "black" : "none"))
      .style("stroke-width", (d) => (d.isOverlap ? 1 : 0))
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("click", handleClick)
      .on("dblclick", handleDblClick);
  }, [
    data,
    containerSize,
    cellWidth,
    cellHeight,
    handleMouseOver,
    handleMouseOut,
    handleClick,
    handleDblClick,
  ]);

  useEffect(() => {
    drawGrid(); // Initial drawing

    // Add resize event listener
    const handleResize = () => {
      drawGrid();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawGrid]);

  return (
    <>
    <h1>I am in Grid </h1>
      <svg
        ref={svgRef}
        className="heatmap-grid"
        style={{ width: "100%", height: "100%" }}
      >
        {/* The SVG will be updated by D3.js */}
      </svg>
    </>
  );
};

// Grid.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired,
//     confidence: PropTypes.number,
//     sentiment: PropTypes.string,
//     percentile: PropTypes.number,
//     speaker: PropTypes.string.isRequired,
//     isOverlap: PropTypes.bool,
//     isSilence: PropTypes.bool,
//     wordFrequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   })).isRequired,
//   containerSize: PropTypes.shape({
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired
//   }).isRequired,
//   cellWidth: PropTypes.number.isRequired,
//   cellHeight: PropTypes.number.isRequired,
//   setTooltip: PropTypes.func.isRequired,
// };

export default Grid;
