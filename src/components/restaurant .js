import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from  './rate';
import style from './restaraunt.module.css'

export default function Restaraunt(props) {

  const restarauntRate = useMemo(
    () => {
      const sum = props.restaraunt.reviews.reduce(
        (total, review) => total + review.rating, 0
      )

      return Math.round(sum / props.restaraunt.reviews.length)
    },
    [props.restaraunt.reviews]
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.header_text}>Restaraunt rating:</h2> 
        <Rate rating={restarauntRate}/>
      </div>
      <div className={style.body}>
        <div className={style.menu}>
          <h3>Menu</h3>
          <Menu menu={props.restaraunt.menu} />
        </div>
        <div className={style.reviews}>
          <h3>Reviews</h3>
          <Reviews reviews={props.restaraunt.reviews} />
        </div>
      </div>
    </div>
  );
}