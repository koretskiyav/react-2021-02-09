import React from 'react';
import Rating from './rating';

import style from './oneReview.module.css';

export default function OneReview(props) {
  return (
    <div className={style.card}>
      <p>
        <span className={style.user}>{props.review.user}:</span>{' '}
        {props.review.text}
      </p>
      <Rating rating={props.review.rating} />
    </div>
  );
}
