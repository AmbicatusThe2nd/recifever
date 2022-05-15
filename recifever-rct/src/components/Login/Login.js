import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { GetJwt } from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const loginFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    GetJwt(inputs).then((response) => {
      console.log(response.data); // Delete this later
      setToken(response.data);
      navigate('/');
    }).catch(() => {
      console.log('Wrong login'); // Fix this when ready
    })
  }

  return (
    <div className='component-content'>
      <div className={styles.Login} data-testid="Login">
        <h1> Login </h1>
        <div className='form' style={{ padding: 20 }}>
          <form onSubmit={loginFormSubmit}>
            <Grid container direction="column" style={{ marginBottom: '20px' }} justifyContent="center" spacing={2}>
              <Grid item>
                <TextField error={inputs.email === ''} helperText={ inputs.email === '' ? 'This field must not be empty' : '' } name='email' value={inputs.email} onChange={handleChange} label='Email' variant='outlined' />
              </Grid>
              <Grid item>
                <TextField name='password' error={inputs.password === ''} helperText={ inputs.password === '' ? 'This field must not be empty' : '' } value={inputs.password} onChange={handleChange} type='password' label='Password' variant='outlined' />
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
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

Login.defaultProps = {};

export default Login;
