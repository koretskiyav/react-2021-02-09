import { DECREMENT, INCREMENT, REMOVE } from '../constants';
import BasketItemStruct from '../../structs/basketItemStruct';
export default (state = {}, action) => {
  const { type, product } = action;
  let id = product?.id || 0;
  let basketItem = state[id] || new BasketItemStruct(product, 0);
  switch (type) {
    case INCREMENT:
      basketItem.increment();
      return { ...state, [id]: basketItem };
    case DECREMENT:
      basketItem.decrement();
      if (basketItem.amount > 0) {
        return { ...state, [id]: basketItem };
      } // else fall to REMOVE
    case REMOVE:
      const alteredState = { ...state };
      delete alteredState[id];
      return alteredState;
    default:
      return state;
  }
};
