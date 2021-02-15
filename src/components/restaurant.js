import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.item.menu} />
      <Reviews reviews={props.item.reviews} />
    </div>
  );
}
