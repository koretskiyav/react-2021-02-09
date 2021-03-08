import { createContext } from 'react';

export const currencyContext = createContext({
  currency: 'usd',
  setCurrency: () => {},
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
