import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaraunt from './restaurnant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <Restaraunt restaurant={activeRestaurant}/>
    </div>
  );
}
