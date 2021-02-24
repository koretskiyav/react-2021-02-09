import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { getRestaurant } from '../../redux/selectors';

const Restaurant = ({ restaurant }) => {
  const { id, menu, reviews, name, averageRating } = restaurant;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
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
    reviews: PropTypes.arrayOf(PropTypes.string),
    averageRating: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurant: getRestaurant(state, props.id),
});

export default connect(mapStateToProps)(Restaurant);
