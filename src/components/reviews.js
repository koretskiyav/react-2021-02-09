import React from 'react';
import Review from './review';
import Rate from './rate';

import style from './reviews.module.css';

function Reviews(props) {
  const { reviews } = props;

  return (
    <div className={style.reviews}>
      <h2 className={style.reviews__title}>
        Reviews Average Rating:
        <Rate reviews={reviews} />
      </h2>
      {reviews.map((review) => (
        <Review key={review.id} user={review.user} text={review.text} rating={review.rating} />        
      ))}
    </div>
  );
}

export default Reviews;
