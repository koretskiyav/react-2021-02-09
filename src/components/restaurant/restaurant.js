import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, NavLink} from "react-router-dom";
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
// import Tabs from '../tabs';
import {averageRatingSelector} from '../../redux/selectors';
import styles from './restaurant.module.css';

const Restaurant = ({restaurant, averageRating}) => {
	const {id, name, menu, reviews} = restaurant;
	return (
		<>
			<Banner heading={name}>
				{!!averageRating && <Rate value={averageRating} />}
			</Banner>
			<div className={styles.tabs}>
				<NavLink
					key={`/restaurants/${id}/menu`}
					to={`/restaurants/${id}/menu`}
					className={styles.tab}
					activeClassName={styles.active}
				>
					Menu
				</NavLink>
				<NavLink
					key={`/restaurants/${id}/reviews`}
					to={`/restaurants/${id}/reviews`}
					className={styles.tab}
					activeClassName={styles.active}
				>
					Reviews
				</NavLink>
			</div>
			<Switch>
				<Route path={`/restaurants/${id}/menu`} render={(props) => (
					<Menu {...props} menu={menu} restaurantId={id} />
				)} />
				<Route path={`/restaurants/${id}/reviews`} render={(props) => (
					<Reviews {...props} reviews={reviews} restaurantId={id} />
				)} />
			</Switch>
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
