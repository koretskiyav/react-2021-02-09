import { normalizedRestaurants } from '../../fixtures';
import { SEND_REVIEW } from '../../redux/constants'


const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, values, reviewId, userId } = action;

  switch (type) {

    case SEND_REVIEW:
      let restaurant = restaurants[values.restId];
      return {...restaurants, [values.restId]: {...restaurant, reviews: [...restaurant.reviews, reviewId]}}
    
    default:
      return restaurants;
  }
};