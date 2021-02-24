import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getReview } from '../../../redux/selectors';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review }) => {
  const { userName, text, rating } = review;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {userName}
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
    userName: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  review: getReview(state, props.id),
});

export default connect(mapStateToProps)(Review);
