import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

import style from './restaurant.module.css';

export default function Restaurant(props) {
  let ratingMean = 0;
  if (props.activeRestaurant.reviews) {
    const ratingSum = props.activeRestaurant.reviews.reduce(
      (sum, el) => sum + el.rating,
      0
    );
    ratingMean = ratingSum / props.activeRestaurant.reviews.length;
    ratingMean = ratingMean % 1 === 0 ? ratingMean : ratingMean.toFixed(2);
  }
  console.log(ratingMean);
  return (
    <div>
      <Menu menu={props.activeRestaurant.menu} />
      <div className={style.ratingMean}>
        Средний рейтинг: <Rate rating={ratingMean} />
      </div>
      <Reviews reviews={props.activeRestaurant.reviews} />
    </div>
  );
}
