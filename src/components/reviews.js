import React from 'react';
import Rate from './rate';
import style from './reviews.module.css';

export default function Restaurant(props) {


  const Review = (review) => (
    <div className={style.reviewWrap}>
      <div className={style.name}>{review.user}</div>
      <div>{review.text}</div>
      <Rate rating={review.rating} />
    </div>
  );


  return <div className={style.rewiewContainer}>{props.reviews.map((review) => Review(review))}</div>;
}