import {
  DECREMENT,
  INCREMENT,
  CARTOPEN,
  CARTCLOSE,
  CARTTOGGLE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });

export const openCart = () => ({ type: CARTOPEN });
export const closeCart = () => ({ type: CARTCLOSE });
export const toggleCart = () => ({ type: CARTTOGGLE });
