import { createContext } from 'react';
import { CURRENCY_USD } from '../redux/constants';

export const currencyContext = createContext({
  currency: CURRENCY_USD,
  setCurrency: () => {},
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
