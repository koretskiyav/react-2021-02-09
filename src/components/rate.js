import React from 'react';

import style from './rate.module.css';

export default function Rate(props) {
  return (
    <span>
      {[...Array(props.rating)].map((e, i) => (
        <span className={style.star} key={i}>&#9733;</span>)
      )}
    </span>
  );
}
