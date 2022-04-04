import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@mui/material';
import styles from './Register.module.css';

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className={styles.Register} data-testid="Register">
      <h1> Register </h1>
      <div className='form' style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
            <Grid item>
              <TextField name='firstName' value={inputs.firstName} onChange={handleChange} label="Firstname" variant='outlined' />
            </Grid>
            <Grid item>
              <TextField name='lastName' value={inputs.lastName} onChange={handleChange} label="Lastname" variant='outlined' />
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
            <Grid item>
              <TextField name='email' value={inputs.email} onChange={handleChange} label="Email" variant='outlined' />
            </Grid>
            <Grid item>
              <TextField name='dateOfBirth' value={inputs.dateOfBirth} onChange={handleChange} label="Date of birth" type='date' defaultValue="1999-06-11" variant='outlined' />
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '20px' }} justifyContent="center" container spacing={2}>
            <Grid item>
              <TextField name='password' value={inputs.password} onChange={handleChange} label="Password" type="password" variant='outlined' />
            </Grid>
            <Grid item>
              <TextField name='passwordRepeat' value={inputs.passwordRepeat} onChange={handleChange} label="Repeat password" type="password" variant='outlined' />
            </Grid>
          </Grid>
          <Grid alignItems="center" direction="column" spacing={0} justifyContent="center" container>
            <Grid item>
              <Button type="submit" variant='contained'> Register </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
