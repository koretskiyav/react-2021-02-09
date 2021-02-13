import React from 'react';
import Rate from './rate';
import style from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={style.review}>
      <h3>Customer: {review.user}</h3>
      <p>Review: {review.text}</p>
      <Rate rate={review.rating} />
    </div>
  );
}
