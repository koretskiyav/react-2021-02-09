import {combineReducers} from 'redux';
import orderReducer from './order';

export default combineReducers({
	orders: orderReducer,
	foo: () => 'bar',
});
