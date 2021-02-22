import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Order from './order/order';
import styles from './basket.module.css';


const Basket = ({orders}) => {
	let summary = 0;
	return (
		<div className={styles.basket} data-id="basket">
			<h3>Basket:</h3>
			{Object.keys(orders).map(function (productId) {
				summary = summary + orders[productId].product.price * orders[productId].amount

				return <Order key={productId} productId={productId} order={orders[productId]} />
			})}
			<p>Summary: ${summary}</p>
		</div>
	);
};

const mapStateToProps = function (state, props) {
	return {orders: state.orders};
};

export default connect(mapStateToProps)(Basket);
