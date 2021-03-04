import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {restaurantsListSelector,} from '../redux/selectors';
import RestaurantHeader from '../components/restaurant/header/restaurant-header'
import HeaderMenu from '../components/header/header-menu/header-menu'
import {restaurantInnerLinks} from './utils'

function RestaurantInner({
 restaurants,
 match,
}) {
  const { restId, innerPage } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);
  const { id, menu, reviews } = restaurant

  const links = restaurantInnerLinks({menu, reviews, id})
  const elemToRender = links.find(link => link.title.toLowerCase() === innerPage).elem

  return (
    <>
      <HeaderMenu />
      <RestaurantHeader restaurant={restaurant} links={links} />
      {elemToRender}
    </>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(RestaurantInner);
