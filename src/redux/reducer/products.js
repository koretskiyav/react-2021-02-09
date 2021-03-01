import produce from 'immer';

import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  error: null,
};

export default produce((draft, action) => {
  const { type, data, error, restaurantId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      draft.loading = false;
      draft.loaded[restaurantId] = true;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
  }
}, initialState);
