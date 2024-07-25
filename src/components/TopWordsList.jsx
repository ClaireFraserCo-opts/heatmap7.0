import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/topWordsList.module.css'; // Adjust the import according to your setup

const TopWordsList = React.memo(({ data }) => {
  const topWords = Array.isArray(data.topWords) ? data.topWords : [];

  return (
    <div className={styles.topWordsList}>
      <h3>Top Words</h3>
      {topWords.length === 0 ? (
        <p>No top words available.</p>
      ) : (
        <ul>
          {topWords.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

TopWordsList.propTypes = {
  data: PropTypes.shape({
    topWords: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default TopWordsList;
