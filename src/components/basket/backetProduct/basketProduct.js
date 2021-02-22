import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Minus } from '../../../icons/minus.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { increment, decrement, remove} from '../../../redux/actions';
import PropTypes from 'prop-types';

import styles from './basketProduct.module.css';

const BasketProduct = ({id, name, price, amount, increment, decrement, remove}) => {
  return (
    <div className={styles.product}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.amount}>
        <button
          className={styles.button}
          onClick={decrement} 
        >
        <Minus />
        </button>
        <span className={styles.amountValue}>{amount}</span>
        <button
          className={styles.button}
          onClick={increment} 
        >
        <Plus />
        </button>
      </div>
      <div className={styles.total}>
        {amount * price}$
      </div>
      <button 
        className={styles.deleteButton} 
        onClick={remove}
      >
        &times;
      </button>
    </div>
  )
}

BasketProduct.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string, 
  price: PropTypes.number.isRequired, 
  amount: PropTypes.number.isRequired, 
  increment: PropTypes.func, 
  decrement: PropTypes.func,
  remove: PropTypes.func,
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
  remove: () => dispatch(remove(props.id)),
})

export default connect(null, mapDispatchToProps)(BasketProduct);