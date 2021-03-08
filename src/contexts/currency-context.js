import { createContext, useState } from 'react';

const currencies = {
  USD: { coeff: 1, symbol: '$' },
  EUR: { coeff: 1.19, symbol: '€' },
  RUB: { coeff: 74.35, symbol: '₽' },
};

const currenciesArr = Object.entries(currencies).map(([key, value]) => {
  return { ...value, key: key };
});

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');

  return (
    <CurrencyContext.Provider
      value={{ currencies, currenciesArr, currency, setCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
