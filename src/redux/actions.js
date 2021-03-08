import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS, SAVE_ORDER, CLEAR_BASKET
} from './constants';

import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector, orderProductsSelector
} from './selectors';

export const clearBasket = () => ({ type: CLEAR_BASKET });

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

const _savedUser = (init) => ({ type: SAVE_ORDER, CallAPI: '/api/order', init: init});

export const saveOrder = () => async (dispatch, getState) => {
  const state = getState();
  if (state.savingorder.saving === true) {
    return;
  };
  const products = (orderProductsSelector(state)).map(function(obj) {
    return {id: obj.product.id, amount: obj.amount}
  });
  const init = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(products) };
  dispatch(_savedUser(init));
};


export const increment = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.savingorder.saving === false) {
    dispatch({ type: INCREMENT, id });
  }
};

export const decrement = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.savingorder.saving === false) {
    dispatch({ type: DECREMENT, id });
  }
};

export const remove = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.savingorder.saving === false) {
    dispatch({ type: REMOVE, id });
  }
};