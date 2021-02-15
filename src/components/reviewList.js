import React from 'react';
import OneReview from './oneReview';

export default function ReviewList(props) {
  return (
    <div>
      <h1>Reviews:</h1>
      {props.reviews.map((review) => (
        <OneReview key={review.id} review={review} />
      ))}
    </div>
  );
}
