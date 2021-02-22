import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Basket from '../basket';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  const products = useMemo(
    () => {
      let result = [];
      restaurants.map(restaurant => {
          restaurant.menu.map(product => {
            result[product.id] = product;
          })
      })
      return result;
    },
    [restaurants]
  );

  console.log(products);

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
      <Basket products={products}/>
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
