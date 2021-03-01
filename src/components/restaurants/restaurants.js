import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadRestaurants } from '../../redux/actions';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  restaurantsErrorSelector,
} from '../../redux/selectors';
import useLoader from '../../hooks/use-loader';

import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = (props) => {
  const { restaurants } = props;

  const loader = useLoader(props, 'loadRestaurants');
  if (loader) return loader;

  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  // from connect
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.object,
  loadRestaurants: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
    error: restaurantsErrorSelector(state),
  }),
  { loadRestaurants }
)(Restaurants);
