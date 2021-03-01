import produce from 'immer';

import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default produce((draft, action) => {
  const { type, data, error, restaurantId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error[restaurantId] = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.error[restaurantId] = error;
      break;
  }
}, initialState);
