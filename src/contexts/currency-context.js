import { createContext } from 'react';

export const currencyContext = createContext({
  currency: '$'
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
