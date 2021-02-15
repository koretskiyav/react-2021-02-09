import React from 'react';
import Rate from './rate';
import style from './reviews.module.css';

export default function Restaurant(props) {
  const genetateReviewJsx = (review) => (
    <div className={style.reviewWrap}>
      <div className={style.name}>{review.user}</div>
      <div>{review.text}</div>
      <Rate rating={review.rating} />
    </div>
  );
  return <div>{props.reviews.map((review) => genetateReviewJsx(review))}</div>;
}
