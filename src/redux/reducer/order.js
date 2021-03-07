import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  UPDATE_ORDER_STATUS,
} from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  message: 'Заказ ещё не создан :(',
};

// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, id, data } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      return draft;
    case DECREMENT:
      draft.entities[id] =
        draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      return draft;
    case REMOVE:
      draft.entities[id] = 0;
      return draft;
    case UPDATE_ORDER_STATUS:
      const { success, message } = data;
      if (success) {
        draft.entities = {};
      }
      draft.message = message;
      return draft;
    default:
      return draft;
  }
});
