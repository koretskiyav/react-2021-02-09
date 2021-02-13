import React from 'react';
import {ReactComponent as Star} from '../icons/star.svg';
import style from './rate.module.css';

export default function Rate(props) {

  const stars = [];

  for (let i = 0; i < props.rating; i++) {
    stars.push(
      <Star className={style.icon} key={i} />
    )
  }

  return (
    <div className={style.conyainer}>
      {stars.length ? stars : null}
    </div>
  )
}