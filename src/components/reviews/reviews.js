import React from 'react';
import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} data-id="review" />
      ))}
    </div>
  );
};


// No sure about correct way to implement it here or in parent
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number.isRequired
    }
  ))
}

export default Reviews;
