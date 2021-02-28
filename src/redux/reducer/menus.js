import { LOAD_MENU, STATE_LOADED, SUCCESS } from "../constants";

export default (state = {}, action) => {
  const { type, id } = action;

  switch (type) {

    case LOAD_MENU + SUCCESS:
      return {...state, [id]: STATE_LOADED }

    default:
      return state;
  }
};
