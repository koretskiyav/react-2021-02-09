import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';
const Restaurant = ({ restaurant, averageRating, reviewsLoaded }) => {
  const { id, name } = restaurant;
  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews restaurantId={id} />,
    },
  ];
  return (
    <div>
      <Banner heading={name}>
        {reviewsLoaded ? <Rate value={averageRating} /> : null}
      </Banner>
      <Tabs tabs={tabs} />
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

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
  reviewsLoaded: reviewsLoadedSelector(state),
}))(Restaurant);
