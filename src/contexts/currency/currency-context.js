import { createContext } from 'react';
import { USD } from './constants';

export const currencyContext = createContext(USD);

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
