import React from 'react';
import StarRatings from 'react-star-ratings';

const Rate = ({rating}) => {
  return(
    <div>
      <StarRatings
      rating={rating}
      starDimension="24px" />
      {rating.toFixed(1)}
    </div>);
}

export default Rate;