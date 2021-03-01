import { ADD_REVIEW, LOAD_REVIEWS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
}

export default produce( (draft = initialState, action) => {
  const { type, review, reviewId, userId, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.loading = false;
      draft.loaded = true;
      draft.entities[restaurantId] = arrToMap(data);
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[restaurantId][reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
