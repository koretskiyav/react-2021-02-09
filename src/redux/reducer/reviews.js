import { ADD_REVIEW, LOAD_REVIEWS, STATE_LOADING, STATE_LOADED, SUCCESS, REQUEST } from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {...state, [action.restaurantId]: {'state': STATE_LOADING}}

    case LOAD_REVIEWS + SUCCESS:
      return {...state, [action.restaurantId]: {'state' : STATE_LOADED, 'entities': arrToMap(action.data)}};

    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};
