import produce from 'immer';
import { ADD_REVIEW, LOAD_USERS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

export default produce((draft = {}, action) => {
  const { type, review, userId } = action;

  switch (type) {

    case LOAD_USERS + SUCCESS:
      return {...draft, ...arrToMap(action.data)};

    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
