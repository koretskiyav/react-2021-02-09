import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from 'react-redux'
import {restaurantReviewsSelector} from '../../redux/selectors'

const Restaurant = ({ restaurant, reviewsArr }) => {
  const { name, menu } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviewsArr.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviewsArr.length);
  }, [reviewsArr]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviewsArr} /> },
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
    reviews: PropTypes.array,
    // from selectors
    reviewsArr: PropTypes.array,
  }).isRequired,
};

export default connect((state, props) => {
  return {
    reviewsArr: restaurantReviewsSelector(state, props)
  }
})(Restaurant);
