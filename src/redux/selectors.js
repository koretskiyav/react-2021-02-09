import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;
const orderSelector = (state) => state.order;
const restaurantIdSelector = (_, props) => props.restaurantId;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = createSelector(
  restaurantIdSelector,
  (state) => state.products.loading,
  (restaurantId, productsLoading) => productsLoading[restaurantId]
);
export const productsLoadedSelector = createSelector(
  restaurantIdSelector,
  (state) => state.products.loaded,
  (restaurantId, productsLoaded) => productsLoaded[restaurantId]
);

export const reviewsLoadingSelector = createSelector(
  restaurantIdSelector,
  (state) => state.reviews.loading,
  (restaurantId, reviewsLoading) => reviewsLoading[restaurantId]
);
export const reviewsLoadedSelector = createSelector(
  restaurantIdSelector,
  (state) => state.reviews.loaded,
  (restaurantId, reviewsLoaded) => reviewsLoaded[restaurantId]
);

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantIdByProductSelector = createSelector(
  restaurantsListSelector,
  (_, { product: { id } }) => id,
  (restaurants, productId) =>
    restaurants.find((restaurant) => restaurant.menu?.includes(productId))?.id
);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const productSelector = (state, { id }) => productsSelector(state)[id];
const reviewSelector = (state, { id }) => reviewsSelector(state)[id];

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
  (_, { restaurant }) => restaurant.reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  }
);
