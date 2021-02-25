import React from 'react';
import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review
          data-id="product-item"
          key={review.id}
          {...review}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  )
};

export default Reviews;
