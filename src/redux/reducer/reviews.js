import { normalizedReviews } from '../../fixtures';
import {SUBMITREVIEW} from '../constants'
import uuid from '../middleware/create-uuid'

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
)

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  const id = uuid();
  const userId = uuid();

  switch (type) {
    case SUBMITREVIEW:
      return { ...reviews,  [id]: {
          id,
          userId
        }
      }
    default:
      return reviews;
  }
};
