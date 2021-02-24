import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
export const usersSelector = (state) => state.users;
export const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products;
export const reviewsSelector = (state) => state.reviews;

export const reviewSelector = (state, id) => state.reviews[id];
export const restaurantSelector = (state, id) => state.restaurants[id];
export const productSelector = (state, id) => state.products[id];
export const orderAmountSelector = (state, id) => state.order[id] || 0;

export const findUserKeyByName = (state, name) => {
  const users = usersSelector(state);
  return Object.keys(users).find((key) => users[key].name === name);
};

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

export const getRestaurantsTabs = createSelector(
  restaurantsSelector,
  (restaurants) =>
    Object.keys(restaurants).map((id) => ({ id, name: restaurants[id].name }))
);

export const getRestaurant = createSelector(
  restaurantSelector,
  reviewsSelector,
  (restaurant, reviews) => {
    const averageRating = Math.round(
      restaurant.reviews
        .map((id) => reviews[id])
        .reduce((acc, { rating }) => acc + rating, 0) /
        restaurant.reviews.length
    );
    return {
      ...restaurant,
      averageRating,
    };
  }
);

export const getReview = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => {
    return {
      ...review,
      userName: users[review.userId].name,
    };
  }
);
