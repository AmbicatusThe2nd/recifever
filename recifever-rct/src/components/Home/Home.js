import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import { Grid } from '@mui/material';
import CustomCard from '../CustomCard/CustomCard';
import { RecipeService } from '../../services/RecipeService';

const Home = () => (
  <>
    <Navbar />
    <div className='home-content'>
      <div className={styles.Home} data-testid="Home">
        <Grid container>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
          <Grid item>
            <CustomCard  
              Title='NK Maribor' 
              Summery='Established in 1960, it growed to be the best club in Slovenia'
              ImagePath='https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg'
              />
          </Grid>
        </Grid>
      </div>
    </div>
  </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
