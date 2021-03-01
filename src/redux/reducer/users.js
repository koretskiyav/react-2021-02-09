import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case LOAD_USERS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.loaded = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
      });
    case LOAD_USERS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
      });
    case ADD_REVIEW:
      const { name } = review;
      return produce(state, (draft) => {
        draft.entities[userId] = { id: userId, name };
      });
    default:
      return state;
  }
};
