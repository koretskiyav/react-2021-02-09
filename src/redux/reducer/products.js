import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...draft,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...draft,
        entities: { ...draft.entities, ...arrToMap(data) },
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return draft;
  }
});
