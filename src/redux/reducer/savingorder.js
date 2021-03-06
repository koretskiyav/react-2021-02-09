import { FAILURE, REQUEST, SAVE_ORDER, SUCCESS } from '../constants';

const initialState = {
  saving:  false,
  saved: false,
  error: null,
};
export default (state = initialState, action) => {
  const { type, message} = action;
  switch (type) {
    case SAVE_ORDER + REQUEST:
      return { ...state, saving: true, saved: false };
    case SAVE_ORDER + SUCCESS:
      return { ...state, saving: false, saved: true };
    case SAVE_ORDER + FAILURE:
      return { ...state, saving: false, saved: false,  message: message};
    default:
      return state;
  }
};
