import { createContext } from 'react';

export const currencyContext = createContext({
  currentCurrency: '$',
  setCurrentCurrency: () => {},
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
