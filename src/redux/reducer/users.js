import {normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce(
    (acc, user) => ({ ...acc, [user.id]: user }),
    {}
);

export default (users = defaultUsers, action) => {
  const { type, value } = action;

  switch (type) {
    case 'ADDREVIEWUSER':
      return { ...users, [value.uid]: {id: value.uid, name: value.name}};
    default:
      return users;
  }
};
