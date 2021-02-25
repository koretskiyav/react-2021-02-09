import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

import { usersSelector } from '../../../redux/selectors';

const Review = ({ review, users }) => {
  const { userId, text, rating } = review;
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {users[userId].name || 'Anonymous'}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect((state) => {
  return {
    users: usersSelector(state),
  };
})(Review);
