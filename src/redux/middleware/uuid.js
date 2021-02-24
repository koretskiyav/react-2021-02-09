import { v4 as uuid } from 'uuid';
import { findUserKeyByName } from '../selectors';
import { CREATE_REVIEW } from '../constants';
import { updateRestaurantReviews, createReview, createUser } from '../actions';

export default (store) => (next) => (action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { rating, text, name, restaurantId } = action.data;
      const reviewId = uuid();
      let userId = findUserKeyByName(store.getState(), name);

      if (!userId) {
        userId = uuid();
        next(
          createUser({
            id: userId,
            name,
          })
        );
      }

      next(
        createReview({
          id: reviewId,
          userId,
          rating,
          text,
        })
      );
      next(
        updateRestaurantReviews({
          id: restaurantId,
          reviewId,
        })
      );
      return;
    default:
      next(action);
  }
};
