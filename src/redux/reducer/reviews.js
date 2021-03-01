import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[restaurantId] = true;
      });
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
      });
    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
      });
    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};
