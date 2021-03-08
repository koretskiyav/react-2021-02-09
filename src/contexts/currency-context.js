import { createContext } from 'react';

export const currencyContext = createContext({
  currencies: [
    {name: '$', coeff: 1},
    {name: '₴', coeff: 25},
    {name: '₽', coeff: 75}
  ]
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
