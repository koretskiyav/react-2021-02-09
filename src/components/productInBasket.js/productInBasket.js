import React from 'react';

const ProductInBasket = ({ product, quantity }) => (
  <tr>
    <td>{product.name}</td>
    <td>{quantity}</td>
    <td>{product.price}$</td>
    <td>{quantity * product.price}</td>
  </tr>
);

export default ProductInBasket;
