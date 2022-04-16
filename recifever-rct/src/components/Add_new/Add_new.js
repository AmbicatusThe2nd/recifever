import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Add_new.module.css';
import { Button, TextField, Grid, MenuItem, IconButton, FormControl, InputLabel, Select } from '@mui/material';
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

  const [ingredientValues, setIngredientValues] = useState([{ ingredient: '', amount: '', measurement: '' }])

  const handleChangeIngredient = (index, element) => {
    let newIngredientValues = [...ingredientValues]
    newIngredientValues[index][element.target.name] = element.target.value;
    setIngredientValues(newIngredientValues);
  }

  const addIngredientFields = () => {
    setIngredientValues([...ingredientValues, { ingredient: '', amount: '', measurement: '' }]);
  }

  const removeIngredientFields = (index) => {
    let newIngredientValues = [...ingredientValues];
    newIngredientValues.splice(index, 1);
    setIngredientValues(newIngredientValues);
  }

  const [stepValues, setStepValues] = useState([{ step: '' }])

  const handleChangeStep = (index, element) => {
    let newStepValues = [...stepValues]
    newStepValues[index][element.target.name] = element.target.value;
    setStepValues(newStepValues);
  }

  const addStepFields = () => {
    setStepValues([...stepValues, { step: '' }]);
  }

  const removeStepFields = (index) => {
    let newStepValues = [...stepValues];
    newStepValues.splice(index, 1);
    setStepValues(newStepValues);
  }

  const [getDifficulty, setDifficulty] = useState('');

  const difficultyHandleChange = (event) => {
    setDifficulty(event.target.value);
  }

  const [getDailyMeal, setDailyMeal] = useState('');

  const dailyMealHandleChange = (event) => {
    setDailyMeal(event.target.value);
  }

  return (
    <>
      <Navbar />
      <div className='component-content'>
        <div className={styles.Add_new} data-testid="Add_new">
          <h1> Add a new recipe </h1>
          <div className='form'>
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
                  <FormControl fullWidth>
                    <InputLabel id="difficulty-label"> Difficulty </InputLabel>
                    <Select
                      labelId='difficulty-label'
                      id='difficulty-select'
                      value={inputs.difficulty}
                      label='difficulty'
                      onChange={difficultyHandleChange}>
                        <MenuItem value={1}> Easy </MenuItem>
                        <MenuItem value={2}> Medium </MenuItem>
                        <MenuItem value={3}> Hard </MenuItem>
                        <MenuItem value={4}> Extreme </MenuItem>
                        <MenuItem value={5}> Gordon Ramsay </MenuItem>
                      </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel id='dailyMeal-label'> Daily meal </InputLabel>
                    <Select
                      labelId='dailyMeal-label'
                      id='dailyMeal-select'
                      value={inputs.dailyMeal}
                      label='Daily Meal'
                      onChange={dailyMealHandleChange}>
                        <MenuItem value={1}> Breakfest </MenuItem>
                        <MenuItem value={2}> Lunch </MenuItem>
                        <MenuItem value={3}> Dinner </MenuItem>
                        <MenuItem value={4}> Brunch </MenuItem>
                        <MenuItem value={5}> Snack </MenuItem>
                      </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {ingredientValues.map((element, index) => {
                return (<Grid container key={index} style={{ marginTop: '0.1px' }} justifyContent="center" spacing={1}>
                  <Grid item>
                    <TextField name='ingredient' value={inputs.ingredient} checked={!!inputs.ingredient} onChange={(e) => handleChangeIngredient(index, e)} label='Ingredient' variant='outlined' />
                  </Grid>
                  <Grid item>
                    <TextField name='ammount' type='number' value={inputs.amount} checked={!!inputs.ammount} onChange={(e) => handleChangeIngredient(index, e)} label='Amount' variant='outlined' />
                  </Grid>
                  <Grid item>
                    <TextField name='measurment' value={inputs.measurement} checked={!!inputs.ingredient} onChange={(e) => handleChangeIngredient(index, e)} label='Measurement' variant='outlined' />
                  </Grid>
                  {index > 0 ? (
                    <Grid item>
                      <IconButton aria-label='delete' onClick={() => removeIngredientFields(index)}>
                        <DeleteIcon color='error' />
                      </IconButton>
                    </Grid>
                  ) : null
                  }
                </Grid>
                )
              })}
              <Grid container justifyContent="right">
                <Grid item>
                  <IconButton aria-label='addnew' onClick={() => addIngredientFields()}>
                    <AddIcon color='primary' />
                  </IconButton>
                </Grid>
              </Grid>
              {stepValues.map((element, index) => {
                return (<Grid container key={index} style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
                  <Grid item>
                    <TextareaAutosize
                      maxRows={10}
                      aria-label="Adding a step"
                      placeholder="Adding a step"
                      style={{ width: 200, height: 50 }}
                    />
                  </Grid>
                  {index > 0 ? (
                    <Grid item>
                      <IconButton aria-label='delete' onClick={() => removeStepFields(index)}>
                        <DeleteIcon color='error' />
                      </IconButton>
                    </Grid>
                  ) : null
                  }
                </Grid>)
              })}
              <Grid container justifyContent="center">
                <Grid item>
                  <IconButton aria-label='addnew' onClick={() => addStepFields()}>
                    <AddIcon color='primary' />
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
