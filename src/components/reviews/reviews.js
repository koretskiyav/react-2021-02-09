import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';
import {
  reviewsListSelector,
  restaurantReviewsLoadingSelector,
  restaurantReviewsLoadedSelector,
  restaurantReviewsAndUsersLoadedSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';

const Reviews = ({ reviews, restaurantId, loadReviews, loaded, loading }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restaurantId);
  }, [loading, loaded, loadReviews]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map(({ id }) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(
  (state) => ({
    reviews: reviewsListSelector(state),
    loading: restaurantReviewsLoadingSelector(state),
    loaded: restaurantReviewsAndUsersLoadedSelector(state),
  }),
  { loadReviews }
)(Reviews);
