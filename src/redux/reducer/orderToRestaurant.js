import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: restaurantId }
export default (state = {}, action) => {
  const { type, id, restaurantId } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: restaurantId };
    case DECREMENT:
      return { ...state, [id]: restaurantId };
    case REMOVE:
      return { ...state, [id]: restaurantId };
    default:
      return state;
  }
};
