import { createContext } from 'react';

export const CURRENCIES = [
  {
    id: 0,
    ratio: 1,
    title: '$',
  },
  {
    id: 1,
    ratio: 0.84,
    title: '€',
  },
  {
    id: 2,
    ratio: 74,
    title: '₽',
  },
];

export const currencyContext = createContext({
  current: null,
  сurrencies: CURRENCIES,
  setCurrent: () => {},
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
