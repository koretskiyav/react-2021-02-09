import React from 'react';
import Menu from './menu';
import ReviewList from './reviewList';

export default function OneRestaurant(props) {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <ReviewList reviews={props.restaurant.reviews} />
    </div>
  );
}
