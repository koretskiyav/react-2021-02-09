import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getReviewSelector, getUserFromReview } from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, review, user }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  review: getReviewSelector(state, props),
  user: getUserFromReview(state, props),
});

export default connect(mapStateToProps)(Review);
