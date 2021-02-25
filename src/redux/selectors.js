import { createSelector } from 'reselect';

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const restaurantReviewsIdsSelector = (_, props) => props.reviewsIds;
const usersSelector = (state) => state.users;

export const restaurantsSelector = (state) => state.restaurants;
export const orderProductAmountSelector = (state, props) =>
  state.order[props.id] || 0;
export const productSelector = (state, props) => state.products[props.id] || {};

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

export const restaurantReviewsSelector = createSelector(
  reviewsSelector,
  restaurantReviewsIdsSelector,
  usersSelector,
  (allReviews, restaurantReviewsIds = [], users = {}) =>
    Object.values(allReviews)
      .filter((value) => restaurantReviewsIds.indexOf(value.id) > -1)
      .reduce((restaurantReviews, review) => {
        restaurantReviews[review.id] = review;
        restaurantReviews[review.id].user = users[review.userId].name;
        return restaurantReviews;
      }, {})
);
