import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

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

export const averageRatingSelector = createSelector(
  restaurantsSelector,
  reviewsSelector,
  (state, props) => props.id,
  (restaurants, reviewsList, id) => {
    const rest = restaurants[id];
    const reviews = rest.reviews.map((el) => reviewsList[el]);
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }
);

export const getRestaurantSelector = createSelector(
  restaurantsSelector,
  (state, props) => props.id,
  (restaurants, id) => restaurants[id]
);

export const getReviewSelector = createSelector(
  reviewsSelector,
  (state, props) => props.id,
  (reviews, id) => reviews[id]
);

export const getUserFromReview = createSelector(
  getReviewSelector,
  usersSelector,
  (review, userList) => userList[review.userId]
);

export const getAmountSelector = createSelector(
  orderSelector,
  (state, props) => props.id,
  (order, id) => order[id] || 0
);

export const getProductSelector = createSelector(
  productsSelector,
  (state, props) => props.id,
  (products, id) => products[id]
);
