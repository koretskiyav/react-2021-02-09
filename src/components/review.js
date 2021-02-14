import React from 'react';
import Rate from './rate'

import style from './rate.module.css';


export default function Review(props) {
  return (
    <div className={style.card}>
      <div className={'row'}>
        <div>{props.review.user}</div>
        <div><Rate rating={props.review.rating}/></div>
      </div>
      <p>{props.review.text}</p>
      <br/>
    </div>
  );
}

