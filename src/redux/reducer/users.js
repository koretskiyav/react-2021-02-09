import produce from 'immer';
import {ADD_REVIEW, FAILURE, LOAD_USERS, REQUEST, SUCCESS} from '../constants';
import {arrToMap} from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
}

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...draft,
        loading: true,
      }
    case LOAD_USERS + SUCCESS:
      const finalData = arrToMap(data)
      return {
        ...draft,
        entities: {
          ...draft.entities,
          ...finalData
        },
        loading: false,
        loaded: true
      }
    case LOAD_USERS + FAILURE:
      return {
        ...draft,
        loading: false,
        // loaded: draft.loaded ? draft.loaded : false
      }
    case ADD_REVIEW:
      const { name } = review;
      draft.entities[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
