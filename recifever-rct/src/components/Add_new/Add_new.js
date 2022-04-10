import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Add_new.module.css';
import { Button, TextField, Grid, MenuItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const Add_new = () => {
  const [inputs, setInputs] = useState({})
  const difficulties = [
    {
      value: '1',
      label: 'Easy'
    },
    {
      value: '2',
      label: 'Midium'
    },
    {
      value: '3',
      label: 'Hard'
    },
    {
      value: '4',
      label: 'Extreme'
    },
    {
      value: '5',
      label: 'Gordon Ramsay'
    },
  ]
  return (
    <>
      <Navbar />
      <div className='component-content'>
        <div className={styles.Add_new} data-testid="Add_new">
          <h1> Add a new recipe </h1>
          <div className='form' style={{ padding: 20 }}>
            <form>
              <Grid container direction='column' style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
                <Grid item>
                  <TextField name='title' value={inputs.title} label='Title' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField type='number' name='preperationTime' value={inputs.preperationTime} label='Preperation Time' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField type='number' name='cookingTime' value={inputs.cookingTime} label='Cooking Time' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField type='number' name='calories' value={inputs.calories} label='Calories' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField name='difficulty' value={inputs.difficulty} label='Difficulty' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField name='dailyMeal' value={inputs.dailyMeal} label='Daily Meal' variant='outlined' />
                </Grid>
              </Grid>
              <Grid container style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
                <Grid item>
                  <TextField name='dailyMeal' value={inputs.ingredient} label='Ingredient' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField name='dailyMeal' type='number' value={inputs.amount} label='Amount' variant='outlined' />
                </Grid>
                <Grid item>
                  <TextField name='dailyMeal' value={inputs.measurement} label='Measurement' variant='outlined' />
                </Grid>
                <Grid item>
                  <IconButton aria-label='addnew'>
                    <AddIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
                <Grid item>
                  <TextareaAutosize
                    maxRows={10}
                    aria-label="Adding a step"
                    placeholder="Adding a step"
                    style={{ width: 200, height: 50 }}
                  />
                </Grid>
                <Grid item>
                  <IconButton aria-label='addnew'>
                    <AddIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Add_new.propTypes = {};

Add_new.defaultProps = {};

export default Add_new;
