import { arrToMap } from '../utils';
import { FAILURE, LOAD_RESTAURANT_PRODUCTS, SUCCESS } from '../constants';

export default (state = {}, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANT_PRODUCTS + SUCCESS:
      console.log('LOAD_RESTAURANT_PRODUCTS SUCCESS reducer: ', data);
      const temp = {
        ...state,
        entities: arrToMap(data),
        error: null,
      };
      return temp;
    case LOAD_RESTAURANT_PRODUCTS + FAILURE:
      console.log('LOAD_RESTAURANT_PRODUCTS FAILURE reducer: ', data);
      return {
        ...state,
        entities: arrToMap(data),
        error,
      };
    default:
      console.log('LOAD_RESTAURANT_PRODUCTS default reducer');
      return state;
  }
};
