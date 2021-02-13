import React, { useState } from 'react';
import Review from './review';

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
}
