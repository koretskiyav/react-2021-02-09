import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, currentIdRestaurant}) => {


  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review} idReview={review} />
      ))}
      <ReviewForm currentIdRestaurant={currentIdRestaurant}/>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};

export default Reviews;
