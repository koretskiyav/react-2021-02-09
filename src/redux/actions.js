import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  SUBMIT_ORDER,
} from './constants';

import {
  orderToSubmitSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  orderSubmittingSelector,
} from './selectors';

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

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

const _loadReviews = (restaurantId) => ({
  type: LOAD_REVIEWS,
  CallAPI: `/api/reviews?id=${restaurantId}`,
  restaurantId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;

  dispatch(_loadReviews(restaurantId));
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};

export const submitOrder = () => (dispatch, getState) => {
  const state = getState();
  const order = orderToSubmitSelector(state);
  const submitting = orderSubmittingSelector(state);

  if (submitting || order.length === 0) return;

  dispatch({
    type: SUBMIT_ORDER,
    CallAPI: '/api/order',
    params: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    },
    success: '/checkout-success',
    failure: '/checkout-failure',
  });
};
