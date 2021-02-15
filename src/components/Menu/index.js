import React from 'react';
import Product from '../Product';
import style from './menu.module.css';

export default function Menu(props) {
  return (
    <div className={style.container}>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
