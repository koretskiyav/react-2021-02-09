import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_REVIEW_TO_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReview = (review) => ({ type: ADD_REVIEW, payload: review });
export const addReviewToRestaurant = (restaurantId, reviewId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  restaurantId,
  reviewId,
});
