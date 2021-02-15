import React from 'react';
import Rate from './rate';

const Reviews = (props) => {
  const averageRating = () => {
    const rating = props.reviews.reduce((acc, item) => {
      return acc + item.rating;
    }, 0);
    return Math.floor(rating / props.reviews.length);
  };

  return (
    <div>
      Средний рейтинг: <Rate rate={averageRating()} />
      <ul>
        {props.reviews.map((review) => (
          <li key={review.id}>
            Review: {review.text}, From: {review.user}, Rate:{' '}
            {<Rate rate={review.rating} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
