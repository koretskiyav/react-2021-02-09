import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from "react-redux";
import { reviewsSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, reviews, saveCurrentId}) => {

  const { name, menu, reviews:idReviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = idReviews.reduce((acc, rating ) => acc + reviews[rating].rating, 0);
    return Math.round(total / idReviews.length);
  }, [idReviews, reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={idReviews} currentIdRestaurant={restaurant.id}/> },
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
    idReviews: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: reviewsSelector(state),
});

export default connect(mapStateToProps)(Restaurant);

