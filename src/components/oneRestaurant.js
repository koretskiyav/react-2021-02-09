import React from 'react';
import Menu from './menu';
import Rating from './rating';
import ReviewList from './reviewList';

export default function OneRestaurant(props) {
  const reviews = props.restaurant.reviews;
  const averageRating = parseFloat(
    reviews.reduce((total, next) => total + next.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <h3>
        Average rating: <Rating rating={averageRating} />
      </h3>
      <ReviewList reviews={props.restaurant.reviews} />
    </div>
  );
}
