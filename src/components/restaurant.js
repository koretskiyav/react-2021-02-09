import React, { useMemo } from 'react';
import Menu from './menu';
import Rating from './rating';
import Reviews from './reviews';

const Restaurant = ({ restaurant }) => {
  const averageRating = useMemo(() => {
    let sumRating = 0;
    restaurant.reviews.forEach((review) => (sumRating += review.rating));
    return sumRating > 0
      ? Math.round(sumRating / restaurant.reviews.length)
      : sumRating;
  }, [restaurant.reviews]);
  return (
    <div>
      <div>
        Menu: <Menu menu={restaurant.menu} />
      </div>
      <Reviews reviews={restaurant.reviews} />
      <div>
        <strong>Average rating:</strong> <Rating rating={averageRating} stars />
      </div>
    </div>
  );
};

export default Restaurant;
