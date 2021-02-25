import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { reviewId: id, userId, text, rating } = action;
      return { ...reviews, [id]: { id, userId, text, rating } };
    default:
      return reviews;
  }
};
