import styles from './position.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { increment, decrement, clear } from '../../../redux/actions';

const Position = ({ position, increment, decrement, clear }) => (
  <div className={cn(styles.container, styles.flex_container)}>
    <div className={styles.flex_container}>
      <div className={styles.name}>{position.name}</div>
      <div className={styles.count}>x{position.count}</div>
      <div className={styles.price}>{position.price}$</div>
    </div>
    <div className={styles.buttons}>
      <button onClick={() => increment(position.id)}>+</button>
      <button onClick={() => decrement(position.id)}>-</button>
      <button onClick={() => clear(position.id)}>x</button>
    </div>
  </div>
);

Position.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  increment,
  decrement,
  clear,
};

export default connect(null, mapDispatchToProps)(Position);
