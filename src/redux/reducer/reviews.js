import {normalizedReviews } from '../../fixtures';
import {INCREMENT} from "../constants";

const defaultReviews = normalizedReviews.reduce(
    (acc, review) => ({ ...acc, [review.id]: review }),
    {}
);

export default (reviews = defaultReviews, action) => {
  const { type , value} = action;
  switch (type) {
    case 'ADDREVIEW':
      return { ...reviews, [value.id]: value};
    default:
      return reviews;
  }
};
