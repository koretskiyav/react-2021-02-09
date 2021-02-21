import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      const newAmount = (state[id] || 0) - 1;

      if (newAmount > 0) {
        return { ...state, [id]: newAmount };
      }
      // else fallthrough to the REMOVE section
    case REMOVE:
      const { [id]: idToRemove, ...restState } = state;
      return restState;
    default:
      return state;
  }
};
