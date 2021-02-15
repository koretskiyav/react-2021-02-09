import React, { useState } from 'react';
import Menu from '../Menu';
import Reviews from '../Reviews';
import Rate from '../Rate/index';
import { averageRating } from '../../utils/averageRating';

const Restaurant = ({ menu, reviews }) => {
  const [showReviews, setShowReviews] = useState(false);
  const handleShowReviews = () => setShowReviews(!showReviews);
  const reviewsQuatity = reviews.length;
  const middleRating = averageRating(reviews);
  return (
    <div>
      <Rate rating={middleRating} />
      <Menu menu={menu} />
      <button onClick={handleShowReviews} disabled={!reviewsQuatity}>
        {reviewsQuatity ? `Отзывы (${reviewsQuatity})` : 'Нет отзывов'}
      </button>
      {showReviews && <Reviews reviews={reviews} />}
    </div>
  );
};

export default Restaurant;
