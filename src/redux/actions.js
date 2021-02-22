import {DECREMENT, INCREMENT, REMOVE_ORDER_ITEM} from './constants';

export const increment = function (product, amount) {
	let data = {product, amount};
	return {type: INCREMENT, data}
};
export const decrement = function (product, amount) {
	let data = {product, amount};
	return {type: DECREMENT, data}
};
export const removeOrderItem = function (product, amount) {
	let data = {product, amount: 0};
	return {type: REMOVE_ORDER_ITEM, data}
};

export const clearProducts = (product) => ({type: DECREMENT, product});

