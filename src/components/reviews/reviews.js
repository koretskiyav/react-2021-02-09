import React from 'react';
import Review from './review';
import PropTypes from 'prop-types';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {

  Reviews.propTypes ={
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }

  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} data-id="review-id"/>
      ))}
    </div>
  );
};

export default Reviews;
