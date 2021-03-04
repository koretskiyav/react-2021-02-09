import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {restaurantsListSelector,} from '../redux/selectors';
import RestaurantInner from '../pages/restaurant-inner-page'
import RestaurantHeader from '../components/restaurant/header'
import HeaderMenu from '../components/header/header-menu'
import {restaurantInnerLinks} from './utils'
import Basket from '../components/basket'

function RestaurantPage({
 restaurants,
 match,
}) {

  const { restId } = match.params;

  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  const { id, menu, reviews } = restaurant

  if (match.isExact) {
    return (
      <>
        <HeaderMenu />
        <RestaurantHeader restaurant={restaurant} links={restaurantInnerLinks({menu, reviews, id})} />
        <Basket />
      </>
    );
  }

  return <Route path="/restaurants/:restId/:innerPage" component={RestaurantInner} />;
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(RestaurantPage);
