import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function restaurant(props) {
  return (
    <div>
      <h2>Menu:</h2>
      <Menu menu={props.menu} />

      <h2>Reviews:</h2>
      <Reviews reviews={props.reviews} />

      <h2>
        Average rating:
        <Rate rating={average(props.reviews.map(review => review.rating))} />
      </h2>
    </div>
  );
}

function average(nums) {
  return Math.round(nums.reduce((sum, current) => sum + current) / nums.length);
}
