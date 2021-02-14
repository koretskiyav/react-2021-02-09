import React, { useMemo } from 'react';
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

export default function Restaurant(props) {
	const {restaurant} = props;

	const getAverageRating = useMemo(() => {
		const ratings = restaurant.reviews.map((review) => {
			return review.rating;
		});
		const average = ratings.reduce((previousValue, currentValue) => (previousValue + currentValue)) / ratings.length;
		return Number( average.toFixed(1) );
	}, [restaurant.reviews]);

	return (
		<div>
			<Rate rating={getAverageRating} />
			<Menu menu={restaurant.menu}/>
			<Reviews reviews={restaurant.reviews}/>
		</div>
	);
}
