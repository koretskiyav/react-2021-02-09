import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id, quantity, price } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
};
