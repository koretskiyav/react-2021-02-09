import { normalizedUsers } from '../../fixtures';

import { CREATE_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({
    ...acc,
    [user.id]: user,
  }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_USER:
      const { id } = action.data;
      return { ...users, [id]: action.data };
    default:
      return users;
  }
};
