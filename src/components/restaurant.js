import React, { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

const Restaurant = ({restaurant}) => {
  const {menu, reviews} = restaurant;
  const averageRating = useMemo(() => ((reviews.map(({rating}) => rating).reduce((current, next) => current + next, 0))/reviews.length), [reviews]);
  return (
    <>
      <Menu menu={menu} />
      <Rate rating={averageRating} />
      <Reviews reviews={reviews} />
    </>
  );
}

export default Restaurant;