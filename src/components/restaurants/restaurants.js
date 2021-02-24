import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { getRestaurantsTabs } from '../../redux/selectors';

const Restaurants = ({ restaurants }) => {
  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    content: <Restaurant id={id} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default connect((state) => ({
  restaurants: getRestaurantsTabs(state),
}))(Restaurants);
