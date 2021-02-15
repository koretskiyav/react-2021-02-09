import React from 'react';

import Review from '../Review/Review';

import styles from './Reviews.module.css';

export default function Reviews(props) {
  let { reviews, restaurant } = props;
  reviews = Array.isArray(reviews) ? reviews : [];
  let reviewsElements = reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });

  return (
    <div className={'container ' + styles.reviews}>
      <h4 className={styles.reviews__text}>
        Users Reviews {!!restaurant && 'for restaurant ' + restaurant}:
      </h4>
      {reviewsElements}
    </div>
  );
}
