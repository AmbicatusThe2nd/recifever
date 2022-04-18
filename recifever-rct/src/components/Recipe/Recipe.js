import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';

const Recipe = () => (
  <div className={styles.Recipe} data-testid="Recipe">
    Recipe Component
  </div>
);

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
