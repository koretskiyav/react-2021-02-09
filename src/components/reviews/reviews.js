import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { restaurantReviewsSelector } from '../../redux/selectors';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {Object.values(reviews).map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.object.isRequired,
  reviewsIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect((state, props) => ({
  reviews: restaurantReviewsSelector(state, props),
}))(Reviews);
