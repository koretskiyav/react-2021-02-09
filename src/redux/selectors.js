import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const productsRestaurantSelector = (state, { restaurantId }) => productsSelector(state)[restaurantId];
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;

export const productSelector = (state, { id, restaurantId }) => productsSelector(state)[restaurantId][id];
export const productsListSelector = createSelector(
  productsRestaurantSelector,
  (products) => {
    if (!products) return null;
    return Object.values(products);
  },
)
export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

const reviewSelector = (state, { id, restaurantId }) => reviewsSelector(state)[restaurantId][id];
const reviewsRestaurantSelector = (state, { restaurantId }) => reviewsSelector(state)[restaurantId];

export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const reviewsLoadedSelector = (state) => state.reviews.loaded;

export const reviewsListSelector = createSelector(
  reviewsRestaurantSelector,
  (reviews) => {
    if (!reviews) return null;
    return Object.values(reviews);
  }
)

const plainProductsSelector = createSelector(
  productsSelector,
  (products) => Object.keys(products)
    .map((restaurantId) => products[restaurantId])
    .reduce((acc, nextProducts) => ({...acc, ...nextProducts}), [])
)

export const orderProductsSelector = createSelector(
  orderSelector,
  plainProductsSelector,
  (order, products) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
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
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { restaurant }) => restaurant.id,
  (reviews, restaurantId) => {
    if (!reviews[restaurantId]) return null;
    const ratings = Object.keys(reviews[restaurantId]).map((id) => reviews[restaurantId][id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
