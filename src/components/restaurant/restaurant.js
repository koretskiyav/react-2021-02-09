import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector, reviewsLoadingSelector } from '../../redux/selectors';
import Loader from '../loader';

const Restaurant = ({ restaurant, averageRating, reviewsLoading }) => {
  const { id, name, reviews } = restaurant;
  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {averageRating ? <Rate value={averageRating} /> : reviewsLoading ? <Loader /> : null}
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
  reviewsLoading: reviewsLoadingSelector(state),
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
