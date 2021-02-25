import {normalizedReviews} from '../../fixtures';
import {ADD_REVIEW} from '../constants';

const defaultReviews = normalizedReviews.reduce(
	(acc, review) => ({...acc, [review.id]: review}),
	{}
);

export default (reviews = defaultReviews, action) => {
	const {type, reviewData} = action;

	switch (type) {
		case ADD_REVIEW:
			console.log(reviewData)
			return {...reviews, [reviewData.id]: reviewData};
		default:
			return reviews;
	}
};
