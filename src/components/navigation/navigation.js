import React from 'react';
import styles from './navigation.module.css';
import PropTypes from 'prop-types';

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
  restaurants: PropTypes.array,
  onRestaurantClick: PropTypes.func,
};

export default Navigation;
