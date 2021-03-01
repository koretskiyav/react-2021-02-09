import { COUNT_AVERATE_RATING } from '../constants';
import { countAverageRating } from '../utils';

const initialAverageRating = null;

export default (averageRating = initialAverageRating, action) => {
  const { type, reviews } = action;

  switch (type) {
    case COUNT_AVERATE_RATING:
      return countAverageRating(reviews);
    default:
      return averageRating;
  }
};
