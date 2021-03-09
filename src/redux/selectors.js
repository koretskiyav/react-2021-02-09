import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;
const orderSelector = (state) => state.order;

export const orderProductsSelector = createSelector(
  orderSelector,
  (order) => order.products || {}
);
export const orderProductsListSelector = createSelector(
  orderProductsSelector,
  (order) =>
    Object.entries(order).map(([key, value]) => ({ id: key, amount: value }))
);
export const orderSendingSelector = (state) => state.order.sending;
export const orderSendedSelector = (state) => state.order.sended;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restaurantId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restaurantId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restaurantId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restaurantId];

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const amountSelector = (state, { id }) =>
  orderProductsSelector(state)[id] || 0;
export const productSelector = (state, { id }) =>
  productsSelector(state)[id] || {};
const reviewSelector = (state, { id }) => reviewsSelector(state)[id];

const restaurantsIdsByProductsSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    restaurants
      .flatMap((rest) =>
        rest.menu.map((productId) => ({ productId, restId: rest.id }))
      )
      .reduce(
        (acc, { productId, restId }) => ({ ...acc, [productId]: restId }),
        {}
      )
);

export const orderProductsInfoSelector = createSelector(
  orderProductsSelector,
  productsSelector,
  restaurantsIdsByProductsSelector,
  (order, products, restaurantsIds) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
        restaurantId: restaurantsIds[product.id],
      }))
);

export const totalSelector = createSelector(
  orderProductsInfoSelector,
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

export const errorsSelector = (state) => state.errors || {};

export const routerSelector = (state) => state.router;
export const locationSelector = createSelector(
  routerSelector,
  (router) => router.location
);
