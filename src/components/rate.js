import React from 'react';
import ReactStars from "react-rating-stars-component";

function Rate(props) {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		// <p>
		// 	rating: {props.rating}
		// </p>
		<ReactStars
			classNames={'rate_box'}
			count={5}
			onChange={ratingChanged}
			size={15}
			value={props.rating}
			activeColor="#ffd700"
		/>
	);
}

export default Rate;
