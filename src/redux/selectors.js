import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

const idFromPropsSelector = (_, props) => props.id;

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

export const restaurantByIdSelector = createSelector(
  restaurantsSelector,
  idFromPropsSelector,
  (restaurants, id) => restaurants[id]
);

export const averageRatingSelector = createSelector(
  restaurantByIdSelector,
  reviewsSelector,
  (restaurant, reviews) => {
    const total = restaurant.reviews.reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / restaurant.reviews.length);
  }
);

export const reviewByIdSelector = createSelector(
  reviewsSelector,
  idFromPropsSelector,
  usersSelector,
  (reviews, reviewId, users) => {
    const review = reviews[reviewId];
    return { ...review, user: users[review.userId]?.name };
  }
);

export const makeProductByIdSelector = () => createSelector(
  productsSelector,
  idFromPropsSelector,
  (products, id) => products[id]
);

export const productAmountSelector = createSelector(
  orderSelector,
  idFromPropsSelector,
  (order, productId) => order[productId] || 0
);
