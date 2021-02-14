import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

const Restaurant = ({restaurant}) => {
  const {menu, reviews} = restaurant;
  return (
    <>
      <Menu menu={menu} />
      <Rate rating={((reviews.map(({rating}) => rating).reduce((current, next) => current + next, 0))/reviews.length)} />
      <Reviews reviews={reviews} />
    </>
  );
}

export default Restaurant;