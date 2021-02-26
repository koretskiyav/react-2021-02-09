import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

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
export const restaurantsSelector = (state) => state.restaurants;
export const usersSelector = (state) => state.users;
export const amountSelector = (state, props) => (state.order[props.id] || 0);
export const productSelector = (state, props) => state.products[props.id];
export const restaurantSelector = (state, props) => state.restaurants;
