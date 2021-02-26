import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { restaurantsTabsSelector } from '../../redux/selectors';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = restaurants.map(({ id, title }) => ({
    title,
    content: <Restaurant id={id} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsTabsSelector(state),
}))(Restaurants);
