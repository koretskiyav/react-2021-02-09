import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

export default (state = {}, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        [restaurantId]: {
          entities: {},
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        [restaurantId]: {
          entities: arrToMap(data),
          loading: false,
          loaded: true,
          error: null,
        },
      };

    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        [restaurantId]: {
          loading: false,
          loaded: false,
          error,
        },
      };

    default:
      return state;
  }
};
