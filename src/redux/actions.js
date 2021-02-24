import { DECREMENT, INCREMENT, REMOVE, PUBLISH_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const publish = (data, id) => ({
  type: PUBLISH_REVIEW,
  payload: { data, id },
});
