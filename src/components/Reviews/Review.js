import React from 'react';
import Rate from '../Rate/index';
import style from './index.module.css';

const Review = ({ user, text, rating }) => {
  return (
    <div className={style.container}>
      <p className={style.username}>{user}</p>
      <p>{text}</p>
      <Rate rating={rating} />
    </div>
  );
};

export default Review;
