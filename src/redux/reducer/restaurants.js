import { normalizedRestaurants } from '../../fixtures';
import { PUBLISH_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      const { id } = payload;
      const { reviewID } = action;
      if (reviewID) {
        const restaurant = restaurants[id];
        return {
          ...restaurants,
          [id]: {
            ...restaurant,
            reviews: [...restaurant.reviews, reviewID],
          },
        };
      }
      return restaurants;
    default:
      return restaurants;
  }
};
