import { connect } from 'react-redux';
import { orderMessageSelector } from '../redux/selectors';

const OrderStatusPage = ({ message }) => {
  return <h1>{message}</h1>;
};

export default connect((state, props) => ({
  message: orderMessageSelector(state, props),
}))(OrderStatusPage);
