import {createSelector} from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

export const restaurantItemSelector = (state, restaurantItemId) => {

	const selectorData = createSelector(
		restaurantsSelector,
		reviewsSelector,
		(restaurants, reviewsStore) => {
			return {
				reviews: Object.keys(reviewsStore)
					.filter((reviewItemId) => restaurants[restaurantItemId].reviews
						.filter((review) => review === reviewItemId).length > 0
					).map((reviewItemId) => reviewsStore[reviewItemId])
					.map((review) => review),
				restaurant: restaurants[restaurantItemId],
			}
		}
	);
	return selectorData(state);
}
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
