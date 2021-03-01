import { SET_CURRENT_REST_ID } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case SET_CURRENT_REST_ID:
      return { ...state, id};
    default:
      return state;
  }
};