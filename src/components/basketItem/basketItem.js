import React from 'react';
import { connect } from 'react-redux';

class BasketItem extends React.Component {

  render() {

    const item = this.props.props;

    console.log("Rerender: BasketItem");
    return (
      <div>{JSON.stringify(item)}</div>
    );
  };

};

const mapStateToProps = (state, props) => ({
  item: state || {"amount" : 0}
});

const mapDispatchToProps = (dispatch, props) => ({
  //increment: () => dispatch(increment(props.product.id)),
  //decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
