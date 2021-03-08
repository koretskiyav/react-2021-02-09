import { DECREMENT, INCREMENT, REMOVE, POST_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  isUploading: false,
  error: false,
};

// { [productId]: amount }
export default produce((draft, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;
    case DECREMENT:
      const counter = (draft.entities[id] || 0) - 1;
      if (counter > 0) {
        draft.entities[id] = counter;
        break;
      } // fallthrough
    case REMOVE:
      delete draft.entities[id];
      break;
    case POST_ORDER + REQUEST:
      draft.isUploading = true;
      draft.error = null;
      break;
    case POST_ORDER + SUCCESS:
      draft.isUploading = false;
      break;
    case POST_ORDER + FAILURE:
      draft.isUploading = false;
      draft.error = action.error;
      break;
    default:
      break;
  }
}, initialState);
