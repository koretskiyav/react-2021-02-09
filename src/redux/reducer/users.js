import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE, LOAD_PRODUCTS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    case LOAD_USERS + REQUEST:
      return {
        ...draft,
        loading: true,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...draft,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return draft;
  }
});
