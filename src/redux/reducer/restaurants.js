import {normalizedRestaurants} from '../../fixtures';
import {ADD_REVIEW_TO_RESTAURANT} from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
	(acc, restaurant) => ({...acc, [restaurant.id]: restaurant}),
	{}
);

export default (restaurants = defaultRestaurants, action) => {
	const {type, restaurantData} = action;

	switch (type) {
		case ADD_REVIEW_TO_RESTAURANT:
			console.log(restaurantData.reviewData);
			const neReviewId = restaurantData.reviewData.id;
			return {
				...restaurants,
				[restaurantData.restaurantId]: {
					...restaurants[restaurantData.restaurantId],
					reviews: [
						...restaurants[restaurantData.restaurantId].reviews,
						neReviewId
					]
				},
			}


		default:
			return restaurants;
	}
};
