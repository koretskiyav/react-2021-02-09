import React from 'react';
import Rate from './rate';

import style from './review.module.css';

function Review(props) {
  const { user, text, rating } = props;

  return (
    <div className={style.review}>
        <div>
          <div className={style.review__title}>
            {user}
          </div>
          <div className={style.review__rating}>
            <Rate rate={rating} />
          </div>
          <div className={style.review__text}>
            {text}
          </div>
        </div>
    </div>
  );
}

export default Review;
