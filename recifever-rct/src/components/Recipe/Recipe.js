import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';
import Navbar from '../Navbar/Navbar';

const Recipe = () => (
  <>
  <Navbar />
    <div className='component-content'>
      <div className={styles.Recipe} data-testid="Recipe">
        Recipe Component
      </div>
    </div>
  </>
);

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
