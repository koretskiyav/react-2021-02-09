import { normalizedProducts } from '../../fixtures';
import { LOAD_MENU, STATE_LOADED, SUCCESS } from "../constants";
import { arrToMap } from "../utils"

const initialState = {

};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {

    case LOAD_MENU + SUCCESS:
      return {...state, ...arrToMap(action.data)};

    default:
      return state;
  }
};
