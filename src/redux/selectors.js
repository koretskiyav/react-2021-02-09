import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities || {};
const orderSelector = (state) => state.order || {};
const productsSelector = (state) => state.products.entities || {};
const reviewsSelector = (state) => state.reviews.entities || {};
const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
const usersSelector = (state) => state.users?.entities || {};

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const restaurantReviewsLoadingSelector = (state) =>
  state.reviews.loading;
export const restaurantReviewsLoadedSelector = (state) => state.reviews.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productsListSelector = createSelector(
  productsSelector,
  Object.values
);

export const reviewsListSelector = createSelector(
  reviewsSelector,
  Object.values
);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const productSelector = (state, { id }) => productsSelector(state)[id];

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

export const reviewWithUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

// export const averageRatingSelector = createSelector(
//   restaurantReviewsSelector,
//   (reviews = []) => {
//     const ratings = reviews.map((review) => review.rating);
//     return Math.round(
//       reviews.reduce((acc, rating) => acc + rating, 0) / ratings.length
//     );
//   }
// );

export const averageRatingSelector = (state) => 3;
