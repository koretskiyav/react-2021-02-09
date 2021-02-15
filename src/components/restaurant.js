import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

function Restaurant(props) {
  const { menu, reviews } = props;

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default Restaurant;
