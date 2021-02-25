import { createSelector } from 'reselect';

const orderSelector = (state) => state.order;
const orderSelectorAmount = (state, props) => state.order[props.id] || 0;

const productsSelector = (state) => state.products;

const particularProductSelector = (state, props) => state.products[props.id];

const reviewsSelector = (state) => state.reviews;
const restaurantsSelector = (state) => state.restaurants;
const particularRestaurantSelector = (state, props) => state.restaurants[props.restaurant.id];
const usersSelector = (state) => state.users;
const particularUser = (state, userId) => state.users[userId];


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
  restaurantsSelector,
  reviewsSelector,
  particularRestaurantSelector,
  (restaurants, reviews, restaurant) => {
    return restaurant.reviews.map((review) => reviews[review]) /// ?????
  }
);

export const userSelector = createSelector(
  usersSelector,
  particularUser,
  (users, user) => user
)

export const productSelector = createSelector(
  productsSelector,
  particularProductSelector,
  (products, product) => product
)

export const amountSelector = createSelector(
  orderSelector,
  orderSelectorAmount,
  (order, amount) => amount
)

