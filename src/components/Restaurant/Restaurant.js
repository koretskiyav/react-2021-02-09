import React from 'react';

import Menu from '../menu';
import Reviews from '../Reviews/Reviews';
import Rate from '../Rate/Rate';

import style from './Restaurant.module.css';

export default function Restaurant(props) {
  let { restaurant } = props;
  let reviews = restaurant?.reviews;
  let maxRate = 5;
  let averageRate = CountAverageRate(reviews, maxRate);

  return (
    <div>
      <h3 className={style['restaurant__header']}>{restaurant.name}</h3>
      <div className={style['restaurant__rate']}>
        <Rate rate={averageRate} maxRate={maxRate} />
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={reviews} restaurant={restaurant.name} />
    </div>
  );
}

function CountAverageRate(reviews, maxRate) {
  let averageRate = null;

  if (Array.isArray(reviews) && !!reviews.length) {
    let reviewCount = 0;

    reviews.forEach((review) => {
      let rateNumber = parseFloat(review.rating);
      if (!isNaN(rateNumber) && rateNumber >= 0 && rateNumber <= maxRate) {
        reviewCount++;
        averageRate =
          averageRate != null ? averageRate + rateNumber : rateNumber;
      }
    });

    if (averageRate != null && reviewCount > 0) {
      averageRate = averageRate / reviewCount;
    }

    return averageRate;
  }
}
