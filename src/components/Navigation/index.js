import React from 'react';
import style from './navigation.module.css';
export default function Navigation(props) {
  return (
    <div className={style.container}>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
