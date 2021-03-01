import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST: 
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      }    
    case LOAD_PRODUCTS + SUCCESS: 
      return produce(state, (draft) => {
        draft.entities[restaurantId] = arrToMap(data);
        draft.loading = false;
        draft.loaded = true;
      })
    case LOAD_PRODUCTS + FAILURE: 
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      }
    default:
      return state;
  }
};
