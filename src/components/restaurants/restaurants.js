import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsErrorSelector,
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import {loadRestaurants} from '../../redux/actions';

const Restaurants = ({loading, loaded, error, restaurants, loadRestaurants}) => {
  useEffect(() => {
    if (!loading && !loaded && !error) {
      loadRestaurants();
    }
  }, [loading, loaded, loadRestaurants, error]);

  if (loading) return <Loader/>;
  if (!loaded) return 'No data :(';

  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant}/>,
  }));
  return <Tabs tabs={tabs}/>;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
    error: restaurantsErrorSelector(state)
  }),
  {loadRestaurants}
)(Restaurants);
