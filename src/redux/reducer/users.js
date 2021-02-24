import { normalizedUsers as defaultUsers } from '../../fixtures';

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
