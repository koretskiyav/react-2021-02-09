import { DECREMENT, INCREMENT, DELETE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case DELETE:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
