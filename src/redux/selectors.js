import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
export const productAmountSelector = (state, props) => state.order[props.id];
export const productSelector = (state, props) => state.products[props.id];
export const reviewSelector = (state, props) => state.reviews[props.id];
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

export const makeReviewUserSelector = () => {
  return createSelector(
    reviewSelector,
    usersSelector,
    (review, users) => users[review.userId] 
  );
}

export const userByNameSelector = (state, props) => Object.keys(state.users).map((userId) => state.users[userId]).find((user) => user.name === props.name);