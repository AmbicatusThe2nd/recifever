import React from 'react';
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


function createStaticRecipes(ingredient, ammount, measurment) {
  return { ingredient, ammount, measurment }
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
                  <AccountCircleIcon />
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                  >
                    Author Account
                  </Typography>
                </Box>
                <AccessTimeIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                >
                  20min
                </Typography>
                <TimerIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                >
                  20min
                </Typography>
                <LunchDining />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                >
                  300cal
                </Typography>
                <StarIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                >
                  1/5
                </Typography>
                <EggAltIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                >
                  Breakfest
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple-table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}> Ingredient </TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}> Ammount </TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}> Measurment </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  ingredientRows.map((row) => (
                    <TableRow
                      key={row.ingredient}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell> { row.ingredient } </TableCell>
                      <TableCell> { row.ammount } </TableCell>
                      <TableCell> { row.measurment } </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
};

Recipe.propTypes = {};

Recipe.defaultProps = {};

export default Recipe;
