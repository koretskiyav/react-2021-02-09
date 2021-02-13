import React from 'react';

import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as StarEmpty } from '../icons/star-empty.svg';

import style from './rating.module.css';

const Rating = (props) => {
  const { rating, stars } = props;
  let ratingView = `${rating}/5`;

  if (stars) {
    ratingView = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        ratingView.push(<Star key={i} className={style.star} />);
      } else {
        ratingView.push(<StarEmpty key={i} className={style.star} />);
      }
    }
  }
  return <div>{ratingView}</div>;
};

export default Rating;
