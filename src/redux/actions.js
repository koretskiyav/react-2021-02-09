import { DECREMENT, INCREMENT, REMOVE, CREATE_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const createReview = (restaurantId, values) => ({ type: CREATE_REVIEW, restaurantId, ...values });
