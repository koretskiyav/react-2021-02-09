import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  reviewsErrorSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  usersErrorSelector,
} from '../../redux/selectors';
import { connect } from 'react-redux';
import Loader from '../loader';
import ErrorComponent from '../errorComponent';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  reviewsLoading,
  reviewsLoaded,
  reviewsError,
  usersLoading,
  usersLoaded,
  usersError,
}) => {
  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded && !reviewsError)
      loadReviews(restaurantId);
    if (!usersLoading && !usersLoaded && !usersError) loadUsers();
  }, [
    reviewsLoading,
    reviewsLoaded,
    reviewsError,
    usersLoading,
    usersLoaded,
    usersError,
    loadReviews,
    loadUsers,
    restaurantId,
  ]);

  if (reviewsError)
    return <ErrorComponent reload={() => loadReviews(restaurantId)} />;

  if (usersError) return <ErrorComponent reload={() => loadUsers()} />;

  if (reviewsLoading || usersLoading) return <Loader />;
  if (!reviewsLoaded || !usersLoaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} restaurantId={restaurantId} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  createStructuredSelector({
    reviewsLoading: reviewsLoadingSelector,
    reviewsLoaded: reviewsLoadedSelector,
    reviewsError: reviewsErrorSelector,
    usersLoading: usersLoadingSelector,
    usersLoaded: usersLoadedSelector,
    usersError: usersErrorSelector,
  }),
  {
    loadReviews,
    loadUsers,
  }
)(Reviews);
