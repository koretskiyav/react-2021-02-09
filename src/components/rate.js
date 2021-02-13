import React from 'react';
import style from './rate.module.css';

export default function Rate({ rate }) {
  console.log('rate', rate);
  return <div className={style.rate}>Rating: {+rate.toFixed(1)}</div>;
}
