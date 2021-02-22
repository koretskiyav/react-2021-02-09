import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './order.module.css';

import {ReactComponent as Minus} from '../../../icons/minus.svg';
import {ReactComponent as Plus} from '../../../icons/plus.svg';

import {increment, decrement, removeOrderItem} from '../../../redux/actions';

const Order = ({order, productId, increment, decrement, removeOrderItem}) => {
	return (
		<div className={styles.order} data-id="order">
			<span>Product Name : {order.product.name} </span>
			<span>Price: {order.product.price} </span>
			<span>Amount: {order.amount} </span>
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
				<button
					className={styles.button}
					onClick={removeOrderItem}
					data-id="product-increment"
				>
					clear
				</button>
			</div>
			<div>Total Price: ${order.amount * order.product.price}</div>
		</div>
	);
};



const mapStateToProps = (state, props) => ({
	order: state.orders[props.productId],
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
	increment: () => dispatch(increment(props.order.product, props.order.amount)),
	decrement: () => dispatch(decrement(props.order.product, props.order.amount)),
	removeOrderItem: () => dispatch(removeOrderItem(props.order.product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
