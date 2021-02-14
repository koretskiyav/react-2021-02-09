import React from 'react';
import Review from '../Review/Review';

export default function Reviews(props) {
  let { reviews } = props;
  reviews = Array.isArray(reviews) ? reviews : [];
  let reviewsElements = reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });

  return <div>{reviewsElements}</div>;
}
