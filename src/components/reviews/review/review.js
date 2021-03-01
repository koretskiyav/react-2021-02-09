import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { reviewWithUserSelector } from '../../../redux/selectors';

const Review = ({ reviewWithUser }) => {
  console.log(reviewWithUser);
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {reviewWithUser.user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {reviewWithUser.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={reviewWithUser.rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({
  reviewWithUser: reviewWithUserSelector(state, props),
}))(Review);
