import React from 'react';
import Rate from './rate';
import style from '../components/css/reviews.module.css';

export default function Reviews(props) {
  return (
    <div className={style.generalBlock}>
      <div>Отзывы</div>
      {props.reviews.map((review) => (
        <div key={review.id} className={style.review}>
          <div>Пользователь: {review.user}</div>
          <div>Комментарий: {review.text}</div>
          <div>
            Рейтинг: <Rate rate={review.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
