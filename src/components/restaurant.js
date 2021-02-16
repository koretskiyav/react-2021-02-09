import React, { useMemo } from 'react';

import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const { restaurant } = props;
  
  // const averageRating = calcAverageRating(restaurant.reviews);
  const averageRating = useMemo(() => calcAverageRating(restaurant.reviews), [restaurant.reviews])
  return (
    <div>
      <h2>{restaurant.name} <Rate rating={averageRating}/></h2>
      <Menu menu={restaurant.menu}  />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}

function calcAverageRating(reviews) {
  if (!reviews.length) return 0;
  
  const ratingArray = reviews.map(review => review.rating);
  const totalRating = ratingArray.reduce((sum, current) => sum + current, 0);
  const averageRating = totalRating / reviews.length;

  return averageRating;
}