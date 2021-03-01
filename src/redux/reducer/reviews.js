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

export default produce((draft, action) => {
  const { type, data, error, restaurantId, review, reviewId, userId } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      draft.loading = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
  }
}, initialState);
