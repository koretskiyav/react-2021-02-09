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
  submitted: false,
  error: false,
};

export default produce((draft, action) => {
  const { type, id } = action;

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
      draft.submitted = false;
      draft.error = null;
      break;
    case SUBMIT_ORDER + SUCCESS:
      draft.submitting = false;
      draft.submitted = true;
      break;
    case SUBMIT_ORDER + FAILURE:
      draft.submitting = false;
      draft.error = action.error;
      break;
  }
}, initialState);
