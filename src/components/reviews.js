import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
        <p>{review.user}</p>
        <p>{review.text}</p>
        <Rate rate={review.rating}/>
        </div>
      ))}
    </div>
  );
}