import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

export default produce((draft = null, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...draft,
        loading: true,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...draft,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
        error: null,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
