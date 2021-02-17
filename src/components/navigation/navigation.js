import React from 'react';
import PropTypes from 'prop-types';
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

Navigation.protoTypes = {
  id: PropTypes.string,
  name: PropTypes.name,
  onRestaurantClick: PropTypes.func,
};

export default Navigation;
