import { CurrencyConsumer } from '../../contexts/currency-context';

const Money = ({num}) => (
  <CurrencyConsumer>
    {({activeCurrency, currencies }) => {
      const coeff = currencies.find(a => a.name === activeCurrency).coeff;
      return num * coeff + ' ' + activeCurrency
    }}
  </CurrencyConsumer>
);

export default Money
