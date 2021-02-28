import { DECREMENT, INCREMENT, REMOVE } from '../constants';
import produce from 'immer';

// { [productId]: amount }
export default produce((draft = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...draft, [id]: (draft[id] || 0) + 1 };
    case DECREMENT:
      return { ...draft, [id]: draft[id] > 0 ? (draft[id] || 0) - 1 : 0 };
    case REMOVE:
      draft[id] = 0;
      return draft;
    default:
      return draft;
  }
});
