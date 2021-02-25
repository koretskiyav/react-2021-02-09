import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { restaurantsSelector, reviewsSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, reviewsDict }) => {
  const { id, name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const allReviews = Object.values(reviewsDict);
    const total = allReviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / allReviews.length);
  }, [reviewsDict]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} restId={id}/> },
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
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantsSelector(state)[props.id],
  reviewsDict: reviewsSelector(state)
});

export default connect(mapStateToProps, null)(Restaurant);
