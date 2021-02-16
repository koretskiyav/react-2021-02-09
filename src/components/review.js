import React from 'react';

import style from './product.module.css';

export default function Review(props) {
  return (
    <div>
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
      <p className={style.rating}>{props.review.rating}</p>
    </div>
  );
}
