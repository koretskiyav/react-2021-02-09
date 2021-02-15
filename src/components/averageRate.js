import React from 'react';

export default function AverageRate(props) {
  let reviews = props.reviews;
  let sum = reviews.reduce((prev, item) => prev + item.rating, 0);
  let average = Math.round(sum / reviews.length * 10 ) / 10;

  return (
    <p>Рейтинг ресторана: {average} / 5</p>
  )
}

