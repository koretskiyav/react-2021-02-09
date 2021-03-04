import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';

import Loader from '../components/loader';
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

  if (match.isExact) {
    return (
      <div>
        <div>select restaurant:</div>
        {restaurants.map(({ id, name }) => (
          <p key={id}>
            <Link to={`/restaurants/${id}/menu`}>{name}</Link>
          </p>
        ))}
      </div>
    );
  }
  return (
    <Switch>
      <Route path="/restaurants/:restId/:subpage" component={Restaurants} />;
      <Route path="/" component={() => <Link to={`menu`}>View menu</Link>} />
    </Switch>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
