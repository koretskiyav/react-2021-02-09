import { useContext } from 'react';
import { currencyContext } from '../contexts/currency-context';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const converting = (sum) => {
  // const {currency} = useContext(currencyContext);
  // console.log(currency);
  return sum;
}