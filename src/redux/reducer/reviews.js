import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...draft,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...draft,
        entities: { ...draft.entities, ...arrToMap(data) },
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      return draft;
    default:
      return draft;
  }
});
