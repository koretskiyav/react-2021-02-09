import { DECREMENT, INCREMENT } from './constants';

export const increment = (product) => ({ type: INCREMENT, product });
export const decrement = (product) => ({ type: DECREMENT, product });
