import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === 'SEND') {
    const uuid = uuidv4();
    const id = uuidv4();
    const uid = uuidv4();
    const idRestaurant =  action.value.idRestaurant
    const name = action.value.name;
    const review = {id: id, userId: uid, text: action.value.text, rating: action.value.rating}
    store.dispatch({type: "ADDREVIEW", value: review})
    const r = {idReview: id, idRestaurant: idRestaurant}
    store.dispatch({type: "ADDREVIEWINRESTAURANT", value: r})
    const user = {uid: uid, name: name}
    store.dispatch({type: "ADDREVIEWUSER", value: user})
  }
  next(action);
};
