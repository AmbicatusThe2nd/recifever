import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';
import Navbar from '../Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TimerIcon from '@mui/icons-material/Timer'
import LunchDining from '@mui/icons-material/LunchDining';
import StarIcon from '@mui/icons-material/Star'
import EggAltIcon from '@mui/icons-material/EggAlt';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getSpecificRecipe } from '../../services/RecipeService';
import { getSpecificUser } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';


function createStaticRecipes(ingredient, ammount, measurment) {
  return { ingredient, ammount, measurment }
}

function createStaticSteps(step) {
  return { step }
}

const ingredientRows = [
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
  createStaticRecipes('Sugar', 2, 'Cups'),
]

const steps = [
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
  createStaticSteps('Lorem ipsum'),
]

const pictures = [
  'https://net-tv.si/wp-content/uploads/2020/04/jjjjjj-1.jpg',
  'https://i.goalzz.com/?i=reuters%2F2017-11-01%2F2017-11-01t195332z_1816153601_rc1afe2cb930_rtrmadp_3_soccer-champions-liv-mar_reuters.jpg',
  'https://www.nkmaribor.com/Img/Novice/0910//DSC_2812_tonemapped_4.jpg',
  'https://www.mercatorgroup.si/assets/Uploads/_resampled/ResizedImageWzY4Niw0NDZd/Skupinska-MB.jpg'
]



const Recipe = () => {

  const recipeId = window.location.href.split('/').pop();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getSpecificRecipe(recipeId).then((result) => {
     setRecipe(result);
    })
    .catch(() => {
      navigate('*');
    })
  }, [recipe.id])

  return (
    <>
      <Navbar />
      <div className='component-content'>
        <div className={styles.RecipeTitle}>
          <h1> { recipe.title } </h1>
        </div>
        <div className={styles.Recipe} data-testid="Recipe">
          <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            {
              pictures.map((element, index) => {
                return (
                  <div key={index.toString()}>
                    <img src={element} style={{ maxWidth: '900px', maxHeight: '350px' }} />
                  </div>
                )
              })
            }
          </Carousel>
          <AppBar position='static' color='secondary' enableColorOnDark>
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
                <Box display='flex' sx={{ flexGrow: 1 }}>
                  <AccountCircleIcon style={{ marginRight: '5px' }} />
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                  >
                    Author Account
                  </Typography>
                </Box>
                <AccessTimeIcon style={{ marginRight: '5px' }}  />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ marginRight: '5px' }} 
                >
                  { `${recipe.preperationTime} min` }
                </Typography>
                <TimerIcon style={{ marginRight: '5px' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ marginRight: '5px' }} 
                >
                  { `${recipe.cookingTime} min` }
                </Typography>
                <LunchDining style={{ marginRight: '5px' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ marginRight: '5px' }} 
                >
                  { `${recipe.calories} cal` }
                </Typography>
                <StarIcon style={{ marginRight: '5px' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ marginRight: '5px' }} 
                >
                  {`${recipe.difficulty}/5`}
                </Typography>
                <EggAltIcon style={{ marginRight: '5px' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ marginRight: '5px' }} 
                >
                  {`${recipe.dailyMeal}`}
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
          <div style={{ margin: '20px', minWidth: '50px' }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 250 }} aria-label="simple-table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}> Ingredient </TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}> Ammount </TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}> Measurment </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    recipe.ingredients?.map((ingredient, index) => (
                      <TableRow
                        key={`Ingredient ${++index}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell> {ingredient.ingredient} </TableCell>
                        <TableCell> {ingredient.amount} </TableCell>
                        <TableCell> {ingredient.measurement} </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ margin: '20px', minWidth: '50px' }}>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 250 }} aria-label="simple-table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}> No. </TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}> Step </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    recipe.steps?.map((row, index) => (
                      <TableRow
                        key={`Step ${index}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell> { ++index } </TableCell>
                        <TableCell> {row} </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  )
};

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
