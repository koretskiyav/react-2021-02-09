import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './basket.module.css';
import productsInBasket from "../../hooks/products-in-basket";
import Product from "./product";
import Total from "./total";

const Basket = ({restaurants, orders = {}}) => {

    const products = useMemo(() => {
        return productsInBasket(orders, restaurants);
    }, [orders, restaurants]);

    if (products.length === 0) {
        return <div>Ваша корзина пуста</div>
    }

    return (
        <div data-id="basket">
            <div className={styles.basket}>
                {products.map((product) => {
                    return <Product key={product.id} product={product} orders={orders}/>
                })}
                <br/>
                <Total products={products} orders={orders}/>
            </div>
        </div>
    );
};

// TO DO добавить proptypes
Basket.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

const mapStateToProps = (state) => {
    return {orders: state.order}
};

export default connect(mapStateToProps)(Basket);
