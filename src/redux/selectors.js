import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
export const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products;

export const orderProductsSelector = createSelector(
  orderSelector,
  productsSelector,
  (order, products) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const reviewsSelector = (state) => state.reviews;
export const usersSelector = (state) => state.users;

export const getReviewSelector = createSelector(
  reviewsSelector,
  (state, props) => props.id,
  (reviews, id) => reviews[id]
);

export const getUserFromReviewSelector = createSelector(
  getReviewSelector,
  usersSelector,
  (review, users) => users[review.userId]
);

export const getProductSelector = createSelector(
  productsSelector,
  (state, props) => props.id,
  (products, id) => products[id]
);

export const getProductAmountSelector = createSelector(
  getProductSelector,
  orderSelector,
  (productId, order) => order[productId]
);

export const restaurantsSelector = (state) => state.restaurants;
export const getRestaurantSelector = createSelector(
  restaurantsSelector,
  (state, props) => props.id,
  (restaurants, id) => restaurants[id]
);
