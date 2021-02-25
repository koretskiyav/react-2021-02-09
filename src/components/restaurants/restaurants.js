import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.keys(restaurants).map((id) => ({
    title: restaurants[id].name,
    content: <Restaurant restaurant={restaurants[id]} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => {
  return {
    restaurants: restaurantsSelector(state),
  }
})(Restaurants);
