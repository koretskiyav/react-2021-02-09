import { DECREMENT, INCREMENT, REMOVE, SEND_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const sendReview = (values) => ({ type: SEND_REVIEW, values});
