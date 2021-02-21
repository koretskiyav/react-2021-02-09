import { DECREMENT, INCREMENT, CLEAR } from '../constants';

const clear = (state, id) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      const count = (state[id] || 0) - 1;

      if (count <= 0) {
        return clear(state, id);
      }

      return { ...state, [id]: count };
    case CLEAR:
      return clear(state, id);
    default:
      return state;
  }
};
