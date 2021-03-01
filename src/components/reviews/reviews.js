import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadReviews } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  reviewsErrorSelector,
} from '../../redux/selectors';
import useLoader from '../../hooks/use-loader';

import Loader from '../loader';
import Review from './review';
import ReviewForm from './review-form';

import styles from './reviews.module.css';

const Reviews = (props) => {
  const { reviews, restaurantId } = props;

  const loader = useLoader(props, 'loadReviews', restaurantId);
  if (loader) return loader;

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
  // from connect
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool,
  error: PropTypes.object,
  loadReviews: PropTypes.func.isRequired,
};

export default connect(
  (state, props) => ({
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state, props),
    error: reviewsErrorSelector(state),
  }),
  { loadReviews }
)(Reviews);
