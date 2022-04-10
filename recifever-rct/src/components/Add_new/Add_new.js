import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Add_new.module.css';


const Add_new = () => (
  <>
    <Navbar />
    <div className='component-content'>
      <div className={styles.Add_new} data-testid="Add_new">
        Add_new Component
      </div>
    </div>
  </>
);

Add_new.propTypes = {};

Add_new.defaultProps = {};

export default Add_new;
