import { ADD_REVIEW, LOAD_REVIEWS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
      return {...state, ...arrToMap(action.data)};

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
