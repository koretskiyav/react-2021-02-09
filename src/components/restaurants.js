import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './restaurant';

import style from './restaurants.module.css'

export default function Restaurants( props ) {
	const [ activeId, setActiveId ] = useState( props.restaurants[ 0 ].id );

	const activeRestaurant = useMemo(
		() => props.restaurants.find( ( restaurant ) => restaurant.id === activeId ),
		[ activeId, props.restaurants ]
	);

	return (
		<div className={ style.box }>
			<Navigation
				restaurants={ props.restaurants }
				onRestaurantClick={ setActiveId }
			/>
			<Restaurant restaurant={ activeRestaurant }/>
		</div>
	);
}
