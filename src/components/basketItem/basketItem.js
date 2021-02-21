import React from 'react';
import { connect } from 'react-redux';

class BasketItem extends React.Component {

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.remove = this.remove.bind(this);
  };

  increment() {
    var product = this.props.props.product;
    this.props.dispatch({ type: 'INCREMENT', product: product });
  };

  decrement() {
    var product = this.props.props.product;
    this.props.dispatch({ type: 'DECREMENT', product: product });
  };

  remove() {
    var product = this.props.props.product;
    this.props.dispatch({ type: 'REMOVE', product: product });
  };

  render() {
    const item = this.props.props;
    return (
      <div>
        <div>
        {item.product.name} {item.product.price}$
        x{item.amount} = {item.price()}$
        <button onClick={this.increment}>➕</button>
        <button onClick={this.decrement}>➖</button>
        <button onClick={this.remove}>❌</button>
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state, props) => ({
  item: state || {"amount" : 0}
});

export default connect(mapStateToProps)(BasketItem);
