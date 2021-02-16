import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.item.menu} />
      <Rate reviews={props.item.reviews} />
      <Reviews reviews={props.item.reviews} />
    </div>
  );
}
