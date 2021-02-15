export const averageRating = (reviews) => {
  const rating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.trunc(rating / reviews.length);
};
