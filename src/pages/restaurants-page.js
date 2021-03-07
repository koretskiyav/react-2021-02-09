import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';

import Loader from '../components/loader';
import {
  firstIdMenuSelector,
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';

function RestaurantsPage({
  loading,
  loaded,
  loadRestaurants,
  match,
  firstIdMenu
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  if (match.isExact) {
    return (
      <>
        <Restaurants match={match} />
        <Redirect to={`/restaurants/${firstIdMenu}/menu`} />
      </>
    );
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
    firstIdMenu: firstIdMenuSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
