import React from 'react';
import Rate from './rate';

import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map(review => (
        <div className={style.item} key={review.id}>
          <div>User: {review.user}</div>
          <div>Review: {review.text}</div>
          <div>
            Rating:
            <Rate rating={review.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
