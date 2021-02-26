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
      const restaurant = restaurants[restaurantId];
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurant,
          reviews: [ ...restaurant.reviews, reviewId ],
        },
      };
    default:
      return restaurants;
  }
};
