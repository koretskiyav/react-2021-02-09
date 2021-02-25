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
      // Add review to state and to restaurant, and user
      // How to add review id to restaurant?
      // Add user if not exist?
      console.log(
        'Here adding review to state and to restaurant. Action: ',
        action
      );
      defaultReviews[action.payload.id] = action.payload;
      return reviews;
      break;
    default:
      return reviews;
  }
};
