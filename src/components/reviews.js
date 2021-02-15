import React from 'react';

import Review from './review';

import style from './product.module.css';

export default function Reviews(props) {
  return (
    <div className={style.cardReviews}>
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
