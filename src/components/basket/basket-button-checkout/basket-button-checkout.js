import React from 'react';
import Button from '../../button';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveOrder } from '../../../redux/actions';

function BasketButtonCheckout({saveOrder}) {

  const history = useHistory();
  if (history.location.pathname === '/checkout')
  {
    return (
      <div onClick={saveOrder} >
        <Button primary block>
          checkout
        </Button>
      </div>
    );
  }

  return (
    <Link to="/checkout" >
      <Button primary block>
        checkout
      </Button>
    </Link>
  );
}
export default connect(null, {saveOrder})(BasketButtonCheckout);

