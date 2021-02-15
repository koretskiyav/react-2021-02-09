import React from 'react';

import Rate from '../Rate/Rate';

import style from './Review.module.css';

export default function Review(props) {
  let { user: userName, text, rating } = props.review;

  return (
    <div className={style.review}>
      <div className={style['review__user-rate']}>
        {!!userName && <div>User: {userName}</div>}
        <Rate rate={rating} />
      </div>
      {!!text && (
        <div>
          <span>Review:</span>
          <textarea
            className={style['review__text']}
            disabled
            value={text}
          ></textarea>
        </div>
      )}
    </div>
  );
}
