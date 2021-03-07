import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SUBMIT_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  submitting: false,
  error: false,
};

export default produce((draft, action) => {
  const { type, id, ok } = action;

  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[id] =
        draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      draft.entities[id] = 0;
      break;
    case SUBMIT_ORDER + REQUEST:
      draft.submitting = true;
      draft.error = null;
      break;
    case SUBMIT_ORDER + SUCCESS:
      draft.submitting = false;

      if (ok) {
        draft.entities = {};
      }
      break;
    case SUBMIT_ORDER + FAILURE:
      draft.submitting = false;
      draft.error = action.error;
      break;
  }
}, initialState);
