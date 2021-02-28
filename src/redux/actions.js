import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_USERS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  review,
  restaurantId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadUsers = () => ({
  type: LOAD_USERS,
  CallAPI: '/api/users',
});

export const loadProducts = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST, restaurantId });

  try {
    const data = await fetch(`/api/products?id=${restaurantId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, restaurantId, data });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS + FAILURE, restaurantId, error });
  }
};

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });

  try {
    const data = await fetch(`/api/reviews?id=${restaurantId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restaurantId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restaurantId, error });
  }
};
