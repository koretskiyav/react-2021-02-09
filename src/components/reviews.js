import React from 'react';
import Rate from './rate';

import style from './review.module.css';

const Reviews = ({reviews}) => {
return (
  <>
    <p>Отзывы</p>
    {reviews.map(({user, text, rating}) =>
      <div className={style.review}>
        <div>
          <p>{user}</p>
          <p>{text}</p>
        </div>
        <Rate rating={rating} />
      </div>)
    }
  </>);
}

export default Reviews;