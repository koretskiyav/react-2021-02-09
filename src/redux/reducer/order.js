import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CREATE_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  error: null,
  ordered: {},
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, id } = action;
    switch (type) {
      case INCREMENT: {
        draft.entities[id] = (draft.entities[id] || 0) + 1;
        break;
      }
      case DECREMENT: {
        draft.entities[id] =
          draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
        break;
      }
      case REMOVE: {
        draft.entities[id] = 0;
        break;
      }
      case CREATE_ORDER + REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case CREATE_ORDER + SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.ordered = draft.entities;
        draft.entities = {};
        break;
      case CREATE_ORDER + FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      default:
        return;
    }
  });
