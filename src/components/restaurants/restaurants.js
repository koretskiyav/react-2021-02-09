import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({restaurants}) => {
	const tabs = Object.keys(restaurants).map((key) => ({
		title: restaurants[key].name,
		content: <Restaurant restaurant={restaurants[key]} />,
	}));
	return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
	restaurants: PropTypes.objectOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default connect((state) => ({
	restaurants: state.restaurants,
}))(Restaurants);
