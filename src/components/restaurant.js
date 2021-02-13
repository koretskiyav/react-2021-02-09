import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

function Restaurant( props ) {
	return (
		<div className="restaurant">
			<Menu menu={ props.restaurant.menu }/>
			<Reviews reviews={ props.restaurant.reviews }/>
		</div>
	);
}

export default Restaurant;
