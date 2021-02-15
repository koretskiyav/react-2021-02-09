import React from 'react';

import style from './Rate.module.css';

export default function Rate(props) {
  let { rate, maxRate } = props;
  rate = parseRateToFloat(rate);
  maxRate = parseMaxRateToInt(maxRate);

  let starsElements = configureStarsElements(rate, maxRate);

  return (
    <div className={style['rate']}>
      <div className={style['rate__stars']}>{starsElements}</div>
      {(!!rate || rate === 0) && (
        <span className={style['rate__text']}>({rate.toFixed(1)})</span>
      )}
    </div>
  );
}

function configureStarsElements(rate, maxRate) {
  let starsElements = [];

  for (let starIndex = 0; starIndex < maxRate; starIndex++) {
    starsElements[starIndex] =
      rate != null &&
      (starIndex < Math.floor(rate) ? (
        <span key={starIndex} className={style.active}></span>
      ) : (
        <span key={starIndex}></span>
      ));
  }

  return starsElements;
}

function parseRateToFloat(rate) {
  let rateNumber = parseFloat(rate);
  rate = !isNaN(rateNumber) && rateNumber >= 0 ? rateNumber : null;

  return rate;
}

function parseMaxRateToInt(maxRate) {
  let maxRateNumber = parseInt(maxRate);
  maxRate = !isNaN(maxRateNumber) ? maxRateNumber : 5;

  return maxRate;
}
