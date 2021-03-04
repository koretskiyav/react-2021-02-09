import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Rate from '../rate';
import {averageRatingSelector} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { name } = restaurant;

  return (
    <>
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
    </div>
    </>
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

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
