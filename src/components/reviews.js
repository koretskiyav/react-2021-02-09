import React from 'react';
import Rate from './rate';
import getAverageRating from '../hooks/average-rating';
import style from './reviews.module.css';

export default function Reviews(props) {
  if (props.showList) {
    return (
      <div className={style.wrap}>
        <h2>Отзывы</h2>
        {props.reviews.map((review) => (
          <div key={review.id} className={style.item}>
            <p>
              <strong>Имя:</strong> {review.user}
            </p>
            <p>
              <strong>Текст:</strong> {review.text}
            </p>
            <Rate rate={review.rating} />
          </div>
        ))}
      </div>
    );
  }

  if (!props.showList) {
    let averageRating = getAverageRating(props.reviews);

    return (
      <div className={style.wrap}>
        <h2>Средний рейтинг: {averageRating}</h2>
      </div>
    );
  }
}
