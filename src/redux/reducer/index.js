import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import user from './user';

export default combineReducers({
  order,
  restaurants,
  products,
  reviews,
  user
});
