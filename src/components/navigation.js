import React from 'react';
import Rate from './rate';


export default function Navigation(props) {

  const calcAvg = (restaurant) => {
    let sum = 0;
    restaurant.reviews.map((review) => {
      sum = sum + review.rating;
    });

    return Math.round(sum / restaurant.reviews.length);
  }

  return (
    <div>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          <img width='200px' height='150px' src={`https://source.unsplash.com/200x150/?restaurants,${restaurant.name}`}></img>
          <div className={'row'}>
            <h4>{restaurant.name}</h4>
            <div><Rate rating={calcAvg(restaurant)} /></div>
          </div>
        </button>
      ))}
    </div>
  );
}
