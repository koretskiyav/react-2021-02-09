import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => 
  ({ ...acc, [restaurant.id]: restaurant}),
  {} 
)

export default (restaurants = defaultRestaurants, action) => {
  const { type, id, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      return {...restaurants, [id]: {...restaurants[id], reviews: restaurants[id].reviews.concat([reviewId])}}
    default:
      return restaurants;
  }
};
