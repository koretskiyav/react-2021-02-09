import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {reviewSelector, userByIdSelector} from "../../../redux/selectors";

const Review = (review) => {
  const {user, text, rating} = review;
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating}/>
        </div>
      </div>
    </div>
  )
}

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  ...reviewSelector(state, props.id),
  user: userByIdSelector(state, reviewSelector(state, props.id).userId)?.name
})

export default connect(mapStateToProps)(Review);
