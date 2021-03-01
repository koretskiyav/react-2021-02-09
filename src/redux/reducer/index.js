import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import averageRating from './averageRating';

export default combineReducers({
  order,
  restaurants,
  averageRating,
  products,
  reviews,
  users,
});
