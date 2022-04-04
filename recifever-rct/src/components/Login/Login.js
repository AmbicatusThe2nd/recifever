import React from 'react';
import { useState } from 'react';
import styles from './Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const loginFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className={styles.Login} data-testid="Login">
      <h1> Login </h1>
      <div className='form' style={{ padding: 20 }}>
        <form onSubmit={loginFormSubmit}>
          <Grid container direction="column" style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
            <Grid item>
              <TextField name='email' value={inputs.email} onChange={handleChange} label='Email' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField name='password' value={inputs.password} onChange={handleChange} type='password' label='Password' variant='outlined' />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" alignContent="center">
            <Grid item>
              <Button type='submit' variant='contained'> Login </Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/register" color='secondary' variant='contained'> Register </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
