import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';

import { loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({ loading, loaded, reviews, restaurantId, loadReviews }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restaurantId);
  }, [loading, loaded, loadReviews, restaurantId]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data ...';

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

export default connect(
  (state) => ({
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
  }),
  { loadReviews }
)(Reviews);
