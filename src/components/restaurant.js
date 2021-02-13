import React, {useMemo} from 'react';
import Menu from './menu/menu';
import Reviews from './reviews/reviews';
import Rate from './rate';

function Restaurant(props) {
	const averageRate = useMemo(
		() => {
			let summaryRate = 0;
			props.activeRestaurant.reviews.map((review) => summaryRate += review.rating);
			let averageNum = summaryRate / props.activeRestaurant.reviews.length
			return Math.round(averageNum * 100) / 100;
		},
		[props.activeRestaurant.reviews]
	);
	return (
		<div>
			<h2>Restaurant: {props.activeRestaurant.name}</h2>
			<div>
				<span>Average restaurant rating:</span> <Rate rating={averageRate} />
			</div>
			<Menu menu={props.activeRestaurant.menu} />
			<Reviews reviews={props.activeRestaurant.reviews} />
		</div>
	);
}

export default Restaurant;
