import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';
import Navbar from '../Navbar/Navbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { width } from '@mui/system';
import { Grid } from '@mui/material';


const pictures = [
  'https://net-tv.si/wp-content/uploads/2020/04/jjjjjj-1.jpg',
  'https://i.goalzz.com/?i=reuters%2F2017-11-01%2F2017-11-01t195332z_1816153601_rc1afe2cb930_rtrmadp_3_soccer-champions-liv-mar_reuters.jpg',
  'https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg',
  'https://www.mercatorgroup.si/assets/Uploads/_resampled/ResizedImageWzY4Niw0NDZd/Skupinska-MB.jpg'
]

const Recipe = () => {
  return (
    <>
      <Navbar />
      <div className='component-content'>
        <div className={styles.RecipeTitle}>
          <h1> Recipe Title </h1>
        </div>
        <div className={styles.Recipe} data-testid="Recipe">
        </div>
      </div>
    </>
  )
};

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
