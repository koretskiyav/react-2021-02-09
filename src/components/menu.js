import React from 'react';
import Product from './product';
import AverageRate from './averageRate'

export default function Menu(props) {
  let reviews = props.reviews;

  return (
    <div>
      <AverageRate reviews={reviews}/>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
