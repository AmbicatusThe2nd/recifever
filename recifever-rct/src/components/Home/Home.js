import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';

const Home = () => (
  <><Navbar /><div className={styles.Home} data-testid="Home">
    Home Component
  </div></>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
