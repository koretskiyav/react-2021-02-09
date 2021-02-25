import { PUBLISH_REVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === PUBLISH_REVIEW) {
    return next({ ...action, reviewID: uuidv4(), userID: uuidv4() });
  }
  next(action);
};
