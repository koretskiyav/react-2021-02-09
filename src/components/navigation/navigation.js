import React from 'react';
import * as pt from 'prop-types';
import styles from './navigation.module.css';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  onRestaurantClick: pt.func,
  restaurants: pt.arrayOf(
    pt.shape({
      id: pt.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Navigation;
