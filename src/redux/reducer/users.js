import {normalizedUsers} from '../../fixtures'
import restaurant from '../../components/restaurant'

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({...acc, [user.id]: user}),
  {}
)

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
}