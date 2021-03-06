import {
  SEND_ORDER,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  FAILURE,
} from '../constants';

export default (errors = null, action) => {
  const { type, error } = action;
  switch (type) {
    case SEND_ORDER + FAILURE:
      return { ...errors, [SEND_ORDER]: error };
    case LOAD_PRODUCTS + FAILURE:
      return { ...errors, [LOAD_PRODUCTS]: error };
    case LOAD_RESTAURANTS + FAILURE:
      return { ...errors, [LOAD_RESTAURANTS]: error };
    case LOAD_REVIEWS + FAILURE:
      return { ...errors, [LOAD_REVIEWS]: error };
    case LOAD_USERS + FAILURE:
      return { ...errors, [LOAD_USERS]: error };
    default:
      return errors;
  }
};
