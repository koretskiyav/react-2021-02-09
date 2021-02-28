import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
  reviewsLoadedByRestaurant,
} from '../../redux/selectors';
import { connect } from 'react-redux';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loaded,
  loading,
  loadedByRestaurant,
  loadUsers,
  usersLoaded,
  usersLoading,
}) => {
  useEffect(() => {
    if (!loading && !loadedByRestaurant) {
      loadReviews(restaurantId);
    }

    if (!usersLoaded && !usersLoading) {
      loadUsers();
    }
  }, [
    restaurantId,
    loaded,
    loading,
    loadedByRestaurant,
    usersLoaded,
    usersLoading,
    loadReviews,
    loadUsers,
  ]);

  if (loading || usersLoading) return <Loader />;
  if (!loaded || !usersLoaded || !loadedByRestaurant) return 'No data :(';

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
  (state, props) => ({
    loaded: reviewsLoadedSelector(state, props),
    loading: reviewsLoadingSelector(state, props),
    usersLoaded: usersLoadedSelector(state, props),
    usersLoading: usersLoadingSelector(state, props),
    loadedByRestaurant: reviewsLoadedByRestaurant(state, props),
  }),
  { loadReviews, loadUsers }
)(Reviews);
