import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft[restaurantId].entities[reviewId] = {
          id: reviewId,
          userId,
          text,
          rating,
        };
      });

    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        [restaurantId]: {
          entities: {},
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        [restaurantId]: {
          entities: arrToMap(data),
          loading: false,
          loaded: true,
          error: null,
        },
      };

    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        [restaurantId]: {
          loading: false,
          loaded: false,
          error,
        },
      };

    default:
      return state;
  }
};
