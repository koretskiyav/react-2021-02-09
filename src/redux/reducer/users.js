import { normalizedUsers } from '../../fixtures';
import { PUBLISH_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      const { data } = payload;
      const { userID } = action;
      if (userID) {
        return {
          ...users,
          [userID]: {
            id: userID,
            name: data.name,
          },
        };
      }
      return users;
    default:
      return users;
  }
};
