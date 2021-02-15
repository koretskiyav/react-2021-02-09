import React from 'react';
import RateIcon from './RatingIcon';

const Rate = ({ rating }) => (
  <div>
    {[1, 2, 3, 4, 5].map((index) => (
      <RateIcon index={index} rating={rating} />
    ))}
  </div>
);

export default Rate;
