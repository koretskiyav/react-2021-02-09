import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './buyProduct.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import { increment, decrement } from '../../redux/actions';

const BuyProduct = ({product, amount, increment, decrement}) => {
 

  return (
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={decrement}
                data-id="product-decrement"
              >
                <Minus />
              </button>
              <button
                className={styles.button}
                onClick={increment}
                data-id="product-increment"
              >
                <Plus />
              </button>
            </div>
          </div>
  );
};

BuyProduct.propTypes = {
   // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyProduct);
