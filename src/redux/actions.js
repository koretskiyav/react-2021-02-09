import {DECREMENT, INCREMENT, REMOVE, ADD_USER, ADD_REVIEW, ADD_REVIEW_TO_RESTAURANT} from './constants';

export const increment = (id) => ({type: INCREMENT, id});
export const decrement = (id) => ({type: DECREMENT, id});
export const remove = (id) => ({type: REMOVE, id});
export const addUser = (userData) => ({type: ADD_USER, userData});
export const addReview = (reviewData) => ({type: ADD_REVIEW, reviewData});
export const addReviewToRestaurant = (restaurantData) => ({type: ADD_REVIEW_TO_RESTAURANT, restaurantData});

