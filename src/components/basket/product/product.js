import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from "../../product/product.module.css";
import {ReactComponent as Minus} from "../../../icons/minus.svg";
import {ReactComponent as Plus} from "../../../icons/plus.svg";
import {decrement, increment, remove} from "../../../redux/actions";

const Product = ({product, orders, increment, remove, decrement}) => {

    return (
        <div data-id="basket-product">
            <span> Название продуката: {product.name}</span>
            <div>
                <div className={styles.counter}>
                    <div className={styles.count} data-id="product-amount">
                        Количество: {orders[product.id]}
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
                        <button
                            className={styles.button}
                            onClick={remove}
                            data-id="product-delete"
                        >
                            <Plus  className={styles.delete}/>

                        </button>
                    </div>
                </div>
            </div>
            <div> Стоимость за единицу: {product.price}</div>
            <div> Стоимость за {orders[product.id]} : {orders[product.id] * product.price}</div>
        </div>
);
};

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    remove: PropTypes.func,
};

const mapStateToProps = (state, props) =>
{
    return {orders: state.order}
}

const mapDispatchToProps = (dispatch, props) => ({
    increment: () => dispatch(increment(props.product.id)),
    decrement: () => dispatch(decrement(props.product.id)),
    remove: () => dispatch(remove(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
