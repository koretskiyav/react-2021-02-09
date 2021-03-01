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
  loading: false,
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error, restaurantId, review, reviewId, userId } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        draft.loading = false;
        draft.loaded[restaurantId] = true;
      });
    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
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
