import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const restaurantsIdsArr = Object.keys(restaurants)
  const tabs = restaurantsIdsArr.map((restaurant) => ({
    title: restaurants[restaurant].name,
    content: <Restaurant restaurant={restaurants[restaurant]} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
