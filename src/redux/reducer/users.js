import { normalizedUsers } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { userId: id, name } = action;
      return { ...users, [id]: { id, name } };
    default:
      return users;
  }
};
