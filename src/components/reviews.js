import React from 'react';
import Rate from './rate';
import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div>
      {
        props.reviews.map((review) => 
          <div key={review.id} className={style.panel}>
            <div className={style.panel_header}>
              <span>{review.user}</span>
              <Rate rating={review.rating} />
            </div>
            <p>{review.text}</p>
          </div>
        )
      }
    </div>
  )
}