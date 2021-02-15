import React from 'react';

function Rate(props) {
  const { rate, reviews } = props;

  function averageRating(reviews) {
    let popularitySum = 0;
    let itemsFound    = 0;
    const len         = reviews.length;
    let item          = null;

    for (let i = 0; i < len; i++) {
        item = reviews[i];

        popularitySum = item.rating + popularitySum;
        itemsFound    = itemsFound + 1;
    }

    return parseFloat( popularitySum / itemsFound ).toFixed(1);
  }

  function getRateOrAverage(reviews, rate){
    if (reviews !== undefined){
      return averageRating(reviews);
    } else {
      return rate;
    }
  }

  return (
    <div>
      {getRateOrAverage(reviews, rate)}
    </div>
  );
}

export default Rate;
