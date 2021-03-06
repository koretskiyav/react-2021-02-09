import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  products: {},
  sending: false,
};

// { [productId]: amount }
export default (order = initialState, action) => {
  const { type, id } = action;
  const { products } = order;
  switch (type) {
    case INCREMENT:
      return {
        ...order,
        products: {
          ...products,
          [id]: (products[id] || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...order,
        products: {
          ...products,
          [id]: products[id] > 0 ? (products[id] || 0) - 1 : 0,
        },
      };
    case REMOVE:
      return { ...order, products: { ...products, [id]: 0 } };
    case SEND_ORDER + REQUEST:
      return { ...order, sending: true };
    case SEND_ORDER + SUCCESS:
      return { ...order, sending: false };
    case SEND_ORDER + FAILURE:
      return { ...order, sending: false };
    default:
      return order;
  }
};
