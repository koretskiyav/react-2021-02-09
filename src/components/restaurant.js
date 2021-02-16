import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {

    const restaurant = props.restaurant;

    return (
        <div>
            <h1>{restaurant.name}</h1>

            <h2>Menu</h2>
            <Menu menu={restaurant.menu}/>

            <h2>Reviews</h2>
            <Reviews reviews={restaurant.reviews}/>

        </div>
    );
}
