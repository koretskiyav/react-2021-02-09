export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const countAverageRating = (reviews) =>
  reviews?.reduce((acc, review) => review.rating + acc, 0) / reviews?.length ||
  0;
