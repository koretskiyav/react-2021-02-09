import { SEND } from '../constants';
import {normalizedReviews } from '../../fixtures';

export default (state = normalizedReviews, action) => {
  const { type, id } = action;
  switch (type) {
    case SEND:
      return state
    default:
      return state;
  }
};
