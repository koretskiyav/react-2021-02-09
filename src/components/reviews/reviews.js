import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {loadReviews, loadUsers} from '../../redux/actions';
import { connect } from 'react-redux';
import Loader from '../loader'
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadingSelector,
  usersLoadedSelector
} from '../../redux/selectors'

import {includesNewItem} from '../../utils'

const Reviews = ({ reviews, restaurantId, loadReviews, loadingReviews, loadedReviews, loadingUsers, loadedUsers, loadUsers }) => {
  useEffect(() => {
    if (!loadingReviews && includesNewItem(reviews, loadedReviews)) loadReviews(restaurantId);
    if (!loadingUsers && !loadedUsers) loadUsers()
  }, [
    loadReviews,
    restaurantId,
    loadingReviews,
    loadedReviews,
    reviews,
    loadingUsers,
    loadedUsers,
    loadUsers
  ]);


  if (loadingReviews || loadingUsers) return <Loader />;
  if (includesNewItem(reviews, loadedReviews) || !loadedUsers) return 'No data :(';

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
    loadingReviews: reviewsLoadingSelector(state),
    loadedReviews: reviewsLoadedSelector(state),
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state)
  }), { loadReviews, loadUsers })(Reviews);
