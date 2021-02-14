import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate'

export default function Restaurant(props) {

    const averageRate = (props.restaurant.reviews.reduce
    ((i, review) => i + review.rating, 0) / props.restaurant.reviews.length).toFixed(1);

  return (
    <div>
    <Rate rate={averageRate} />
    <Menu menu={props.restaurant.menu} />
    <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
