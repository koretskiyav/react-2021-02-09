import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants = {} }) => {
  const tabs = Object.entries(restaurants).map(([, restaurant]) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
