import { CREATE_REVIEW, CREATE_USER } from "../constants";
import { v4 as uuidv4 } from 'uuid';
import { userByNameSelector } from "../selectors";
import { addReview } from "../actions";

export default (store) => (next) => (action) => {
  const { type } = action;
  const id = uuidv4();
  switch (type) {
    case CREATE_REVIEW:
      const { name, restaurantId } = action.review;
      const user = userByNameSelector(store.getState(), {name: name});
      store.dispatch( addReview(restaurantId, id) );
      return next({...action, review: {...action.review, id: id, userId: user.id} });
    case CREATE_USER:
      if (userByNameSelector(store.getState(), {name: action.user.name})) return;
      next({...action, user: {...action.user, id: id}});
      return console.log("user created");
    default:
      return next(action);
  }
}