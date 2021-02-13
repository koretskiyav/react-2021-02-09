import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ activeRestaurant, averageRating }) {
  return (
    <>
      <h2>{activeRestaurant.name}</h2>
      <Rate rate={averageRating} />
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
    </>
  );
}
