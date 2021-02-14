import React from 'react';
import style from './Rate.module.css';

export default function Rate(props) {
  let { rate, maxRate } = props;
  let rateNumber = parseInt(rate);
  let maxRateNumber = parseInt(maxRate);
  rate = !isNaN(rateNumber) ? rateNumber : null;
  maxRate = !isNaN(maxRateNumber) ? maxRateNumber : 5;
  console.log(('Rate: ', rate, 'Max rate:', maxRate));
  let starsElements = [];

  for (let starIndex = 0; starIndex < maxRate; starIndex++) {
    starsElements[starIndex] =
      rate != null &&
      (starIndex < rate ? (
        <span key={starIndex} className={style.active}></span>
      ) : (
        <span key={starIndex}></span>
      ));
  }

  return <div className={style['rating-result']}>{starsElements}</div>;
}
