import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';

import Loader from '../components/loader';
import Tabs from '../components/tabs';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';

function RestaurantsPage({
  loading,
  loaded,
  restaurants,
  loadRestaurants,
  match,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    url: `/restaurants/${id}`,
  }));

  if (match.isExact) {
    return (
      <div>
        <Tabs tabs={tabs} />
        <h3>Please select a restaurant above</h3>
      </div>
    );
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
