import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      // Add review to state and to restaurant
      console.log(
        'Here adding review to state and to restaurant. Action: ',
        action
      );
      return reviews;
      break;
    default:
      return reviews;
  }
};
