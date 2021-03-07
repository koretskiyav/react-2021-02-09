import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';

import Loader from '../components/loader';
import {
  firstRestaurantSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';

function RestaurantsPage({
  loading,
  loaded,
  loadRestaurants,
  firstRestaurant,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <Switch>
      <Route path="/restaurants/:restId" component={Restaurants} />;
      <Redirect to={`/restaurants/${firstRestaurant}`} />
    </Switch>
  );
}

export default connect(
  createStructuredSelector({
    firstRestaurant: firstRestaurantSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
