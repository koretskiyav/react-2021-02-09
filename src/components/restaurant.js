import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const reviews = props.activeRestaurant.reviews;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let ratings = [];
  reviews.forEach((item, i) => {
    ratings.push(item.rating);
  });
  const sum = ratings.reduce(reducer);
  
  return (
    <div>
      <Menu menu={props.activeRestaurant.menu} />
      <Reviews reviews={props.activeRestaurant.reviews} />
      <div>
        <p>Средний рейтинг:</p> 
        <Rate rate={sum / ratings.length}/>
      </div>
    </div>
  );
}