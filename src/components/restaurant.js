import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

function Restaurant(props) {
    const { restaurant } = props;

    return (
        <div>
            <h3>{restaurant.name}</h3>
            <Rate rating={restaurant.reviews.map((review) => review.rating)} />
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}

export default Restaurant;
