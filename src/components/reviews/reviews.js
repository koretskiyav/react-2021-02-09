import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  usersLoadedSelector,
  restaurantReviewsSelector,
} from '../../redux/selectors';

import Loader from '../loader';

const Reviews = ({
  reviews,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
  match,
}) => {
  const { restaurantId } = match.params;

  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [loadUsers, loadReviews, restaurantId]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

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
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviews: restaurantReviewsSelector,
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector,
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
