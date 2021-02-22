import {DECREMENT, INCREMENT, REMOVE_ORDER_ITEM} from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
	const {type, data} = action;
	if (data && data.product && data.product.id) {
		state = {
			...state, [data.product.id]: {
				product: data.product,
				amount: data.amount
			}
		};
	}

	switch (type) {
		case INCREMENT:
			state[data.product.id].amount = (state[data.product.id].amount || 0) + 1;
			console.log(state[data.product.id].amount);
			return state;
		case DECREMENT:
			state[data.product.id].amount = (state[data.product.id].amount || 0) - 1;
			state[data.product.id].amount = (state[data.product.id].amount < 0) ? 0 : state[data.product.id].amount;
			return state;
		case REMOVE_ORDER_ITEM:
			delete state[data.product.id];
			return state;
		default:
			return state;
	}
};
