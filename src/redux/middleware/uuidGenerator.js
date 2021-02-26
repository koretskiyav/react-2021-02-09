import { v4 as uuid } from 'uuid'
import { CREATE_REVIEW } from '../constants';

export default (_) => (next) => (action) => {
  if (action.type === CREATE_REVIEW) {
    next({
      ...action,
      reviewId: uuid(),
      userId: uuid(),
    });
  } else {
    next(action);
  }
};
