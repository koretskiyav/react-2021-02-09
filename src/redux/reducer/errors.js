import {
  SEND_ORDER,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  FAILURE,
  SUCCESS,
} from '../constants';
import { removePropertyFromObject } from '../utils';

export default (errors = {}, action) => {
  const { type, error } = action;
  switch (type) {
    case SEND_ORDER + SUCCESS:
      return removePropertyFromObject(errors, SEND_ORDER);
    case SEND_ORDER + FAILURE:
      return { ...errors, [SEND_ORDER]: error };
    case LOAD_PRODUCTS + SUCCESS:
      return removePropertyFromObject(errors, LOAD_PRODUCTS);
    case LOAD_PRODUCTS + FAILURE:
      return { ...errors, [LOAD_PRODUCTS]: error };
    case LOAD_RESTAURANTS + SUCCESS:
      return removePropertyFromObject(errors, LOAD_RESTAURANTS);
    case LOAD_RESTAURANTS + FAILURE:
      return { ...errors, [LOAD_RESTAURANTS]: error };
    case LOAD_REVIEWS + SUCCESS:
      return removePropertyFromObject(errors, LOAD_REVIEWS);
    case LOAD_REVIEWS + FAILURE:
      return { ...errors, [LOAD_REVIEWS]: error };
    case LOAD_USERS + SUCCESS:
      return removePropertyFromObject(errors, LOAD_USERS);
    case LOAD_USERS + FAILURE:
      return { ...errors, [LOAD_USERS]: error };
    default:
      return errors;
  }
};
