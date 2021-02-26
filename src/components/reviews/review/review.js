import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {connect} from "react-redux";
import { reviewsSelector, usersSelector} from "../../../redux/selectors";

const Review = ({ idReview, reviews, user}) => {

  const userName = useMemo(() => (
      user[reviews[idReview].userId].name),
      [user, idReview, reviews]
  );

  const text = useMemo(() => (
      reviews[idReview].text),
      [idReview, reviews]
  );

  const rating = useMemo(() => (
      reviews[idReview].rating),
      [idReview, reviews]
  );


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
}

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state) => ({
  reviews: reviewsSelector(state),
  user: usersSelector(state),
});

export default connect(mapStateToProps)(Review);