import React from 'react';
import { connect } from 'react-redux';
import BasketItem from '../basketItem'

class Basket extends React.Component {

  render() {

    var items = this.props.items;
    var keys = Object.keys(items);

    return (
      <div>
        Basket:
        <div>
          {console.log(items)}
          {console.log(keys)}
          {
            keys.map((id) => (
              <BasketItem key={id} props={items[id]} />
            ))
          }
        </div>
      </div>
    );    
  };

};

const mapStateToProps = (state) => ({
  items: state.order || [],
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

export default connect(mapStateToProps)(Basket);
