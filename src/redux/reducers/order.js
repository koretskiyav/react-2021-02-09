import { DECREMENT, INCREMENT } from '../constants';
import BasketItemStruct from '../../structs/basketItemStruct';
export default (state = {}, action) => {
  const { type, id } = action;
  let basketItem = state[id] || new BasketItemStruct(0);
  //let basketItem = state[id] || {"amount" : 0};
  switch (type) {
    case INCREMENT:
      basketItem.increment();
      //basketItem["amount"] += 1;
      return { ...state, [id]: basketItem };
    case DECREMENT:
      basketItem.decrement();
      //basketItem["amount"] -= 1;
      return { ...state, [id]: basketItem };
    default:
      return state;
  }
};
