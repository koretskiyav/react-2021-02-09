import { v4 as uuid } from 'uuid';
import { SEND_REVIEW } from '../../redux/constants'

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_REVIEW:
      return next({ ...action, reviewId: uuid(), userId: uuid() });
    
    default:
      return next(action);
  }


};