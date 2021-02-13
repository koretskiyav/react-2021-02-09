import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Restaurant from './restaurant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);
  const [averageRating, setAverageRating] = useState(0);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  useMemo(() => {
    console.log('usememo');
    if (activeRestaurant.reviews.length > 0) {
      let totalRating = 0;
      activeRestaurant.reviews.forEach((review) => {
        totalRating += review.rating;
      });
      setAverageRating(totalRating / activeRestaurant.reviews.length);
    }
  }, [activeRestaurant]);

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <Restaurant
        activeRestaurant={activeRestaurant}
        averageRating={averageRating}
      />
    </div>
  );
}
