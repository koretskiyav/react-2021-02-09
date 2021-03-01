import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  reviewListSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { connect } from 'react-redux';

const Reviews = ({
  userLoaded,
  loading,
  loaded,
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
}) => {
  useEffect(() => {
    if (!userLoaded) loadUsers();
    loadReviews(restaurantId);
  }, [restaurantId]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} id={review.id} />
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
    reviews: reviewListSelector(state),
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
    userLoaded: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
