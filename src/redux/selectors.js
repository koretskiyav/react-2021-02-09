import {createSelector} from 'reselect';

const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

export const productItemSelector = (state, productItemId) => {
	const selectorData = createSelector(
		orderSelector,
		productsSelector,
		(order, products) => ({
			product: products[productItemId],
			amount: order[productItemId] || 0,
		})
	);
	return selectorData(state);
}
export const reviewItemSelector = (state, reviewItemId) => {
	const selectorData = createSelector(
		reviewsSelector,
		usersSelector,
		(reviews, users) => (
			{
				user: users[reviews[reviewItemId].userId].name,
				text: reviews[reviewItemId].text,
				rating: reviews[reviewItemId].rating,
			})
	);
	return selectorData(state);
}

export const orderProductsSelector = createSelector(
	orderSelector,
	productsSelector,
	(order, products) =>
		Object.keys(order)
			.filter((productId) => order[productId] > 0)
			.map((productId) => products[productId])
			.map((product) => ({
				product,
				amount: order[product.id],
				subtotal: order[product.id] * product.price,
			}))
);

export const totalSelector = createSelector(
	orderProductsSelector,
	(orderProducts) =>
		orderProducts.reduce((acc, {subtotal}) => acc + subtotal, 0)
);
