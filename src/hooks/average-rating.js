export default function getAverageRating(reviews) {
  let averageRating = 0;
  let sumRating = 0;

  reviews.map((review) => (sumRating = averageRating + review.rating));
  averageRating = (sumRating / reviews.length).toFixed(1);

  return averageRating;
}
