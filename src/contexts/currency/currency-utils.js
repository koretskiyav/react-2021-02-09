import { USD, EUR, RUB } from './constants';

export const currencies = {
  USD: {
    symbol: '$',
    exchangeRate: 1,
  },
  EUR: {
    symbol: '€',
    exchangeRate: 0.84,
  },
  RUB: {
    symbol: 'р',
    exchangeRate: 74.6,
  },
};

export const CountPrice = (price = 0, currencyId = USD) => {
  price = isNaN(price) ? 0 : price;
  const currency = currencies[currencyId];
  return (currency.exchangeRate * price).toFixed(3) + ` ${currency.symbol}`;
};
