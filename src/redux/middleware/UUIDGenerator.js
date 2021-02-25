import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const uuid = uuidv4();
    // Adding id to action data here.
    action.payload.id = uuid;
  }
  next(action);
};
