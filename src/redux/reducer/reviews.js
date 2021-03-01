import {ADD_REVIEW, FAILURE, LOAD_REVIEWS, REQUEST, SUCCESS} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
}

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null // TODO: useless, try to remove and check
      }
    case LOAD_REVIEWS + SUCCESS:
      const finalData = arrToMap(data)
      return {
        ...state,
        entities: {
          ...state.entities,
          ...finalData
        },
        loading: false,
        loaded: Object.keys(finalData).reduce((acc, cur) => {
          return {
            ...acc, [cur]: true
          }
        }, state.loaded ? state.loaded : {})
      }
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        // loaded: state.loaded ? state.loaded : false,
        error
      }
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        entities: {
          ...state.entities,
          ...{[reviewId]: { id: reviewId, userId, text, rating }},
        }
      };
    default:
      return state;
  }
};
