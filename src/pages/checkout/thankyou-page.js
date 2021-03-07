import React from 'react';
import { connect } from 'react-redux';

import { orderedListSelector } from '../../redux/selectors';

const ThankYouPage = ({ items }) => {
  return (
    <div className="text-center mt15">
      <h1>Thank's for your order!</h1>
      {items.map((item) => {
        return (
          <p>
            {item.name} - x{item.amount}
          </p>
        );
      })}
    </div>
  );
};

export default connect((state) => ({
  items: orderedListSelector(state),
}))(ThankYouPage);
