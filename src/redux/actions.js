import { DECREMENT, INCREMENT, RESTAURANTS, DELETE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const deleteProd = (id) => ({ type: DELETE, id });
export const getRestaurants = (restaurants) => ({
  type: RESTAURANTS,
  restaurants,
});
