import { normalizedReviews } from '../../fixtures';
import { PUBLISH_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      const { data, id } = payload;
      const { reviewID, userID } = action;
      if (reviewID && userID) {
        return {
          ...reviews,
          [reviewID]: {
            id: reviewID,
            userId: userID,
            text: data.text,
            rating: data.rating,
          },
        };
      }
      return reviews;
    default:
      return reviews;
  }
};
