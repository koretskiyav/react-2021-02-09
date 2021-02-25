import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {userSelector} from '../../../redux/selectors'
import { connect } from 'react-redux';

const Review = ({ user, text, rating, userInfo }) => {
  console.log('userInfo', userInfo)
  return(
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {userInfo ? userInfo.name : user}
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
  )
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, review) => {
  console.log('review', review)
  return {
    userInfo: userSelector(state, review.userId)
  }
})(Review);
