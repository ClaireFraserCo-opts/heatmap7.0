import React from 'react';
import PropTypes from 'prop-types';

const TopWordsList = ({ data }) => {
  const topWords = data.topWords || []; // Assuming 'topWords' is a field in the data

  return (
    <div className="top-words-list">
      <h3>Top Words</h3>
      <ul>
        {topWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

TopWordsList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TopWordsList;
