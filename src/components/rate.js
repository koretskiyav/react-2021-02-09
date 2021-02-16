import React from 'react';
import style from './product.module.css';

export default function Rate(props) {
  let averageRating = 0;

  const sumRate = props.reviews.reduce(
    (curSum, curReview) => curSum + curReview.rating,
    0
  );

  averageRating = Math.round(sumRate / props.reviews.length);

  return <div className={style.averageReview}>{averageRating}</div>;
}
