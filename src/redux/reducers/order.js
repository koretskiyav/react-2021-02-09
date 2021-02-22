import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (!state[id] || (state[id] && state[id] - 1 < 0)) return state;
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      delete state[id];
      return state;
    default:
      return state;
  }
};
