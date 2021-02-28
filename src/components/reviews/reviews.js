import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';
import Loader from '../loader';
import { STATE_LOADING } from '../../redux/constants';

const Reviews = (props) => {

  const restaurantId = props.restaurantId;
  const reviews = props.reviews;

  useEffect(() => {
    if (props.reviews == null) {
      props.dispatch(loadReviews(props.restaurantId));
    }
  }, [restaurantId]);

  if (reviews == null || reviews.state === STATE_LOADING) {
    return (
      <Loader />
    );
  }

  return (
    <div className={styles.reviews}>
      {Object.keys(props.reviews.entities).map((id) => (
        <Review key={id} id={id} restaurantId={restaurantId} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect((state, props) => ({
  reviews: state.reviews[props.restaurantId],
}))(Reviews);
