import React from 'react';
import Rating from './rating';

const Review = ({ review }) => {
  return (
    <div>
      <h5>{review.user}</h5>
      <p>
        <q>{review.text}</q>
      </p>
      <Rating rating={review.rating} />
      <hr />
    </div>
  );
};

export default Review;
