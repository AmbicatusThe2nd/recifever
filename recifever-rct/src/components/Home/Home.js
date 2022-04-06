import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className='component-content'>
      <div className={styles.Home} data-testid="Home">
        Home Component
      </div>
    </div>
  </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
