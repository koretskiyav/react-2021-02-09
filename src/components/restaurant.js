import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import style from '../components/css/total-rating.module.css';

export default function Restaurant(props) {
  let sum = 0;
  let ratings = props.restaurant.reviews.map((review) => {
    sum += review.rating;
    return review.rating;
  });
  let totalRating = ratings.length ? (sum / ratings.length).toFixed(1) : 0;

  return (
    <div>
      <div>Название ресторана: {props.restaurant.name}</div>
      <div>
        {' '}
        Меню ресторана: <Menu menu={props.restaurant.menu} />
      </div>
      <Reviews reviews={props.restaurant.reviews} />
      <div className={style.totalRating}>
        Средний рейтинг: <Rate rate={totalRating} />
      </div>
    </div>
  );
}
