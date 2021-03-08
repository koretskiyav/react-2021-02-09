import { CLEAR_BASKET, DECREMENT, INCREMENT, REMOVE} from '../constants';

export default (state = {}, action) => {
  const { type, id} = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? (state[id] || 0) - 1 : 0 };
    case REMOVE:
      return { ...state, [id]: 0 };
    case CLEAR_BASKET:
      return {};
    default:
      return state;
  }
};
