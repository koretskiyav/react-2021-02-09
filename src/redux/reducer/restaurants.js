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
      //console.log('reviewId: ', reviewId);
      //console.log('restaurantId: ', restaurantId);
      const newReviewsForRestaurant = restaurants[restaurantId].reviews.push(reviewId);
      const changedRestaurant = {...restaurants[restaurantId], newReviewsForRestaurant};
      return {...restaurants, restaurantId: changedRestaurant };
    default:
      return restaurants;
  }
};
