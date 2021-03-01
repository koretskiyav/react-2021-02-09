import { arrToMap } from '../utils';
import {FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS} from '../constants'

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
}

//TODO: could be simpler, find better solution

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: !state.loaded ? false : {...state.loaded}
      }
    case LOAD_PRODUCTS + SUCCESS:
      const finalData = arrToMap(data)
      return {
        ...state,
        entities: {
          ...state.entities,
          ...finalData
        },
        loading: false,
        // TODO: create some utils
        loaded: Object.keys(finalData).reduce((acc, cur) => {
          return {
            ...acc, [cur]: true
          }
        }, state.loaded ? state.loaded : {})
      }
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      }
    default:
      return state;
  }
};
