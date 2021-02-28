import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews }) => {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  if (reviews == null) {
    return (
      <Loader />
    );
  }

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

export default connect(null, { loadReviews })(Reviews);
