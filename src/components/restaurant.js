import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Reviews showList={false} reviews={props.restaurant.reviews} />
      <Menu menu={props.restaurant.menu} />
      <Reviews showList={true} reviews={props.restaurant.reviews} />
    </div>
  );
}
