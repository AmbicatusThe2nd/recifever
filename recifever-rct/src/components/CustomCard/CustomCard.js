import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CustomCard.module.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = (props) => (
  <div className={styles.CustomCard} data-testid="CustomCard">
    <Card sx={{ maxWidth: 345 }} style={{ margin: '12px' }}>
      <CardMedia
        component='img'
        alt='picture'
        height='140'
        image={ props.ImagePath }
      />
      <CardContent>
        <Typography gutterBottom variant='h5' color='text.secondary'>
          { props.Title }
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          { props.Summery }
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={ `/recipe/${ props.RecipeId }` } size='small' variant="outlined" color='primary'> More </Button>
      </CardActions>
    </Card>
  </div>
);

CustomCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Summery: PropTypes.string.isRequired,
  ImagePath: PropTypes.string.isRequired,
  RecipeId: PropTypes.string.isRequired,
};

CustomCard.defaultProps = {};

export default CustomCard;
