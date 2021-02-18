import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, user, text, rating }) => (
  <div className={styles.review} data-name="review" data-id={`review-${id}`}>
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id={`review-user`}>{user}</h4>
        <p className={styles.comment} data-id="review-text">{text}</p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
};

Review.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default Review;
