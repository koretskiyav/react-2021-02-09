import { normalizedUsers } from '../../fixtures';
import { SEND_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  switch (action.type) {
    case SEND_REVIEW:
      return {...users, [action.userId]: {id: action.userId, name: action.values.values.name}}
    default:
      return users;
  }
};
