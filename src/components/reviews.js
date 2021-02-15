import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>Пользователь: {review.user}</p>
          <p>Отзыв: {review.text}</p>
          <Rate key={review.id} rate={review.rating} />
        </div>
      ))}
    </div>
  );
}
