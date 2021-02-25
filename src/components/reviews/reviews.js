import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { reviewsSelector } from '../../redux/selectors';

const Reviews = ({ reviews, allReviews, restaurantID }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review} review={allReviews[review]} />
      ))}
      <ReviewForm restaurantID={restaurantID} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect((state) => {
  return {
    allReviews: reviewsSelector(state),
  };
})(Reviews);
