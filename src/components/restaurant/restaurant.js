import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ id, restaurant }) => {
  const averageRating = 0;
  // useMemo(() => {
  //   const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
  //   return Math.round(total / reviews.length);
  // }, [reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={restaurant.menu} /> },
    { title: 'Reviews', content: <Reviews reviews={restaurant.reviews} /> },
  ];

  return (
    <div>
      <Banner heading={restaurant.name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
export default connect((state, props) => {
  const restaurant = state.restaurants[props.id];
  return { restaurant };
})(Restaurant);
