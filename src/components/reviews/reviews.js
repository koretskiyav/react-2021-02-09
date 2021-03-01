import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  currentRestaurantIdSelector,
} from "../../redux/selectors";
import Loader from "../loader";

const Reviews = ({ reviews, restaurantId, loadReviews, loadUsers, loading, loaded, currentRestaurantId }) => {
  useEffect(() => {
    console.log('currentRestaurantId: ', currentRestaurantId.id);
    console.log('restaurantId: ', restaurantId);
    if (currentRestaurantId.id !== restaurantId) {
      loadReviews(restaurantId);
      loadUsers();
    }
  }, [restaurantId]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect((state) => ({
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
  currentRestaurantId: currentRestaurantIdSelector(state),
}), {
  loadReviews,
  loadUsers,
})(Reviews);
