import React from 'react';
import Style from './style.module.css'

export default function Rate({ rate }) {
  const rates = []
  for ( let i = 0; i < +rate; i++ ) {
    if ( i < 5 ) rates.push(i)
  }

  return (
    <div className={Style.rate}>
      { rates.map(e => <div key={e} className={Style.rate__item}></div>) }
    </div>
  )
}