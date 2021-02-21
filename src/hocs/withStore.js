import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, clear } from '../redux/actions';

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id)),
});

export default (WrappedComponent) => {
  const WithStore = (props) => {
    return <WrappedComponent {...props} />;
  }

  WithStore.displayName = `withStore(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return connect(mapStateToProps, mapDispatchToProps)(WithStore);
};
