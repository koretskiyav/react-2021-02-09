import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  let activeRestaurant = props.activeRestaurant;
  let reviews = activeRestaurant.reviews;

  return(
    <div>
      <Menu
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
      <Reviews reviews={reviews}/>
    </div>
  )
}
