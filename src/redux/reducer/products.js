import { arrToMap } from '../utils';
import { FAILURE, LOAD_RESTAURANT_PRODUCTS, SUCCESS } from '../constants';

export default (state = {}, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANT_PRODUCTS + SUCCESS:
      const temp = {
        ...state,
        entities: arrToMap(data),
        error: null,
      };
      return temp;
    case LOAD_RESTAURANT_PRODUCTS + FAILURE:
      return {
        ...state,
        entities: arrToMap(data),
        error,
      };
    default:
      return state;
  }
};
