import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import { Grid } from '@mui/material';
import CustomCard from '../CustomCard/CustomCard';
import { getAllRecipes } from '../../services/RecipeService';

const Home = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((result) => {
      setRecipes(result);
    })
  });

  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className={styles.Home} data-testid="Home">
          <Grid container>
            {
              recipes.map((recipe, index) => {
                return (
                  <Grid item key={recipe.id}>
                    <CustomCard
                      Title={recipe.title}
                      Summery={`Make it for: ${recipe.dailyMeal}`}
                      ImagePath={recipe.photos.shift()}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    </>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
