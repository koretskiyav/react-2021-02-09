import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from 'react-redux';
import {restaurantItemSelector} from '../../redux/selectors';

const Restaurant = ({restaurant, reviews}) => {
	const {name, menu} = restaurant;

	const averageRating = useMemo(() => {
		const total = reviews.reduce((acc, {rating}) => acc + rating, 0);
		return Math.round(total / reviews.length);
	}, [reviews]);

	const tabs = [
		{title: 'Menu', content: <Menu menu={menu} />},
		{title: 'Reviews', content: <Reviews restaurantId={restaurant.id} reviews={reviews} />},
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
	}).isRequired,
	reviews: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		userId: PropTypes.string,
		text: PropTypes.string,
		rating: PropTypes.number,
	})).isRequired,
};

export default connect((state, props) => {
	return restaurantItemSelector(state, props.restaurantId)
})(Restaurant);
