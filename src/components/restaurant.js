import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

const Restaraunt = (props) => {
  return (
    <div>
      <Menu menu={props.menu} />
      <Reviews reviews={props.reviews} />
    </div>
  );
};

export default Restaraunt;
