import React from 'react';
import Rate from './rate';

import style from './review.module.css'

function Review( props ) {
	const reviewName = undefined !== props.review.user ? props.review.user : '';
	const reviewRating = undefined !== props.review.rating ? <Rate rate={ props.review.rating }/> : '';
	const reviewText = undefined !== props.review.text ? props.review.text : '';

	return (
		<div className={ style.item }>
			<div className={ style.item__head }>
				<div className={ style.item__name }> { reviewName }</div>
				<div>{ reviewRating }</div>
			</div>

			<div className={ style.item__body }>{ reviewText }</div>
		</div>
	);
}

export default Review;
