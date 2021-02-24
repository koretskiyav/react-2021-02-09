import { normalizedReviews } from '../../fixtures';

import { CREATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({
    ...acc,
    [review.id]: review,
  }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { id } = action.data;
      return { ...reviews, [id]: action.data };
    default:
      return reviews;
  }
};
