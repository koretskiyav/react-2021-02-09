import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CREATE_REVIEW,
  CREATE_USER,
  UPDATE_RESTAURANT_REVIEWS,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const createReview = (data) => ({ type: CREATE_REVIEW, data });
export const createUser = (data) => ({ type: CREATE_USER, data });
export const updateRestaurantReviews = (data) => ({
  type: UPDATE_RESTAURANT_REVIEWS,
  data,
});
