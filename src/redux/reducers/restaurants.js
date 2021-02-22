import { RESTAURANTS } from '../constants';

export default (state = [], action) => {
  const { type, restaurants } = action;
  switch (type) {
    case RESTAURANTS:
      return restaurants;
    default:
      return state;
  }
};
