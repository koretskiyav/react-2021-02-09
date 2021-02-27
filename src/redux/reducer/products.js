import produce from 'immer';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error, restaurantId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        draft.loading = false;
        draft.loaded[restaurantId] = true;
      });
    case LOAD_PRODUCTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = error;
      });
    default:
      return state;
  }
};
