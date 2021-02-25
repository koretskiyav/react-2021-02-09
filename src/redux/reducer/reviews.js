import { normalizedReviews } from '../../fixtures';
import { SEND_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {

  switch (action.type) {
    case SEND_REVIEW:
      return {...reviews, [action.reviewId] : {...action.values.values, ["userId"] : action.userId }};

    default:
      return reviews;
  }
};
