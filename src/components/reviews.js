import React from 'react';
import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews(props) {
  const reviewList = props.reviews.map( review => (
    <div key={review.id} className={styles.review}>
      <h4 className={styles.user}>{review.user}</h4>
      <p className={styles.rating}><Rate rating={review.rating}/></p>
      <p>{review.text}</p>
      <hr className={styles.hr} />
    </div>
  ))
  return (
    <div>
      {reviewList}
    </div>
  )
}