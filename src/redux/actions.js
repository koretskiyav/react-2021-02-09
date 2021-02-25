import { ADD_REVIEW, CREATE_REVIEW, CREATE_USER, DECREMENT, INCREMENT, REMOVE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const createReview = (review) => ({type: CREATE_REVIEW, review});
export const createUser = (user) => ({type: CREATE_USER, user});
export const addReview = (id, reviewId) => ({type: ADD_REVIEW, id, reviewId});
