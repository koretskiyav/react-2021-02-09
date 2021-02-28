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

export default produce((draft = initialState, action) => {
  const { data, error, type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft.entities[userId] = { id: userId, name };
      break;

    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;

    case LOAD_USERS + SUCCESS:
      draft.entities = arrToMap(data);
      draft.loading = false;
      draft.loaded = true;
      break;

    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;

    default:
      return draft;
  }
});
