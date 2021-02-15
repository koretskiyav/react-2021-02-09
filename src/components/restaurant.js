import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  let ratingMean = 0;
  if (props.activeRestaurant.reviews) {
    const ratingSum = props.activeRestaurant.reviews.reduce(
      (sum, el) => sum + el.rating,
      0
    );
    ratingMean = ratingSum / 2;
  }
  return (
    <div>
      <div className={style.ratingMean}>Средний рейтинг: {ratingMean}</div>
      <Menu menu={props.activeRestaurant.menu} />
      <Reviews reviews={props.activeRestaurant.reviews} />
    </div>
  );
}