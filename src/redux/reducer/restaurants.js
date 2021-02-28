import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  productsLoaded: [],
  reviewsLoaded: [],
};

export default produce((draft = initialState, action) => {
  const { type, restaurantId, reviewId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...draft,
        loading: true,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...draft,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      draft.entities[restaurantId].reviews.push(reviewId);
      return draft;
    case LOAD_PRODUCTS + SUCCESS:
      draft.productsLoaded.push(restaurantId);
      return draft;
    case LOAD_REVIEWS + SUCCESS:
      draft.reviewsLoaded.push(restaurantId);
      return draft;
    default:
      return draft;
  }
});
