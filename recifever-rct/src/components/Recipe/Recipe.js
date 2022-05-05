import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';
import Navbar from '../Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
          <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            {
              pictures.map((element, index) => {
                return (
                  <div key={index.toString()}>
                    <img src={element} style={{ maxWidth: '900px' }} />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </>
  )
};

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
