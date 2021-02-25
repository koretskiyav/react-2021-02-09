import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

const Review = ({restId, review, user}) => (
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
  restId: props.restId,
  review: reviewsSelector(state)[props.id],
  user: usersSelector(state)[reviewsSelector(state)[props.id].userId]
});

export default connect(mapStateToProps, null)(Review);
