import { normalizedRestaurants } from '../../fixtures';
import { UPDATE_RESTAURANT_REVIEWS } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({
    ...acc,
    [restaurant.id]: restaurant,
  }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case UPDATE_RESTAURANT_REVIEWS:
      const { id, reviewId } = action.data;

      const restaurant = { ...restaurants[id] };
      const reviews = [...restaurant.reviews, reviewId];
      restaurant.reviews = reviews;

      return { ...restaurants, [id]: restaurant };
    default:
      return restaurants;
  }
};
