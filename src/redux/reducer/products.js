import produce from 'immer';
import {
  LOAD_RESTAURANT_PRODUCTS,
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
  const { type, restaurantId, data, error } = action;
  switch (type) {
    case LOAD_RESTAURANT_PRODUCTS + REQUEST: {
      return produce(state, (draft) => {
        draft.loading[restaurantId] = true;
      });
    }
    case LOAD_RESTAURANT_PRODUCTS + SUCCESS: {
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
      });
    }
    case LOAD_RESTAURANT_PRODUCTS + FAILURE: {
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
      });
    }
    default:
      return state;
  }
};
