import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const restaurantsErrorSelector = (state) => !!state.restaurants.error;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersErrorSelector = (state) => state.users.error;

export const reviewsLoadingSelector = (state, { restaurantId }) =>
  (state.reviews[restaurantId] && state.reviews[restaurantId].loading) || false;
export const reviewsLoadedSelector = (state, { restaurantId }) =>
  (state.reviews[restaurantId] && state.reviews[restaurantId].loaded) || false;
export const reviewsErrorSelector = (state, { restaurantId }) =>
  (state.reviews[restaurantId] && state.reviews[restaurantId].error) || null;

export const productsLoadingSelector = (state, { restaurantId }) =>
  (state.products[restaurantId] && state.products[restaurantId].loading) ||
  false;
export const productsLoadedSelector = (state, { restaurantId }) =>
  (state.products[restaurantId] && state.products[restaurantId].loaded) ||
  false;
export const productsErrorSelector = (state, { restaurantId }) =>
  (state.products[restaurantId] && state.products[restaurantId].error) || null;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const productSelector = (state, { id, restaurantId }) => {
  const product = productsSelector(state)[restaurantId];
  if (!product) return null;
  return product.entities[id];
};

const reviewSelector = (state, { id, restaurantId }) => {
  const reviews = reviewsSelector(state)[restaurantId];
  if (!reviews) return null;
  return reviews.entities[id];
};

export const orderProductsSelector = createSelector(
  orderSelector,
  productsSelector,
  (order, products) => {
    const allProducts = Object.values(products)
      .map((item) => item.entities)
      .reduce((acc, val) => ({ ...acc, ...val }), {});
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => allProducts[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => {
    if (!review) return;

    return {
      ...review,
      user: users[review.userId]?.name,
    };
  }
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { restaurant }) => restaurant,
  (reviews, restaurant) => {
    const { reviews: ids, id: restaurantId } = restaurant;
    if (!reviews[restaurantId] || !reviews[restaurantId].loaded) {
      return 0;
    }
    const ratings = ids.map((id) => reviews[restaurantId].entities[id].rating);

    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
