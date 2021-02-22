import React from 'react';
import { connect } from 'react-redux';

import { remove } from '../../redux/actions';

const RemoveProduct = ({product, remove}) => {
  return (
    <button onClick={remove}>x</button>
  );
};


const mapDispatchToProps = (dispatch, props) => ({
  remove: () => dispatch(remove(props.product.id)),
});

export default connect(null, mapDispatchToProps)(RemoveProduct);
