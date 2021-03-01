import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { usersLoadingSelector, usersLoadedSelector, reviewsListSelector, reviewsLoadingSelector, reviewsLoadedSelector } from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews, loadUsers, usersLoading, usersLoaded, reviewsLoading, reviewsLoaded }) => {
  useEffect(() => {
    loadUsers();
    if (!reviews) loadReviews(restaurantId);
  }, [reviews, loadUsers, loadReviews, restaurantId]);

  if (!reviews || usersLoading || reviewsLoading) return <Loader />;

  if (!usersLoaded || !reviewsLoaded) return "Что-то пошло не так :c"

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} id={review.id} restaurantId={restaurantId} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default connect((state, props) => ({
  reviews: reviewsListSelector(state, props),
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
  reviewsLoading: reviewsLoadingSelector(state),
  reviewsLoaded: reviewsLoadedSelector(state),
}), 
{ loadReviews, loadUsers }
)(Reviews);
