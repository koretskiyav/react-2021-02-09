import { combineReducers } from 'redux';
import orderReducer from './order';
import cartReducer from './cart';
import restaurantsReducer from './restaurants';

export default combineReducers({
  order: orderReducer,
  cartActive: cartReducer,
  restaurants: restaurantsReducer,
  foo: () => 'bar',
});
