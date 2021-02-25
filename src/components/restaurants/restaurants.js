import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { restaurantsSelector } from '../../redux/selectors';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.entries(restaurants).map(([id, { name }]) => ({
    title: name,
    content: <Restaurant id={id} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state),
}))(Restaurants);
