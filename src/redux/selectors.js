import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;

export const reviewSelector = (state, { id }) => state.reviews[id]; // TODO rewrite

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

export const restaurantSelector = createSelector(
  restaurantsSelector,
  (_, props) => props.id,
  (restaurants, id) => restaurants[id],
);

export const averageRatingSelector = createSelector(
  restaurantSelector,
  reviewsSelector,
  (restaurant, reviews) => {
    const total = restaurant.reviews.reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / restaurant.reviews.length);
  }
);
