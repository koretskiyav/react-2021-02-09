import { normalizedRestaurants } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { reviewId, restaurantId } = action;
      // TODO Perhaps there is a better way
      const newRestaurants = { ...restaurants };
      newRestaurants[restaurantId] = { ...restaurants[restaurantId] };
      newRestaurants[restaurantId].reviews = [ ...restaurants[restaurantId].reviews, reviewId ];
      return newRestaurants;
    default:
      return restaurants;
  }
};
