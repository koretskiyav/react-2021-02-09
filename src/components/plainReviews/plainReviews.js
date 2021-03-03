import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import { restaurantsListSelector } from '../../redux/selectors';

import styles from './restaurants.module.css';

const PlainReviews = ({ restaurants, match }) => {
  const { restId } = match.params;

  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  return (
    <>
      <Restaurant restaurant={restaurant} showReviewsOnly={true}/>
    </>
  );
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(PlainReviews);
