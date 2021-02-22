import { DECREMENT, INCREMENT, CLEAR } from '../constants';

const decrementAmount = (amount = 0) => {
  return amount > 0 ? amount - 1 : 0;
};

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: decrementAmount(state[id]) };
    case CLEAR:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
