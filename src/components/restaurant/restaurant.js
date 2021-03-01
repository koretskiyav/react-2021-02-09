import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating = null }) => {
  const { id, name } = restaurant;
  const tabs = [
    {
      title: 'Menu',
      entityId: 'Menu',
      //onChangeTab: loadRestaurants,
      content: <Menu restaurantId={id} />,
    },
    {
      title: 'Reviews',
      entityId: 'Reviews',
      //onChangeTab: loadRestaurants,
      content: <Reviews restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} entityTabsNames="restaurant-content" />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect((state) => ({
  averageRating: averageRatingSelector(state),
}))(Restaurant);
