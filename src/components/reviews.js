import React from 'react';
import Review from './review';
import Rate from './rate';

import style from './reviews.module.css';

function Reviews( props ) {
	if ( undefined !== props.reviews && props.reviews.length ) {
		const rateSum = props.reviews.reduce( ( sum, curr ) => sum + parseFloat( curr.rating ), 0 );
		const rateAverage = ( Math.round( rateSum / props.reviews.length * 10 ) / 10 ) || 0;

		return (
			<div className={ style.reviews }>
				<div className={ style.reviews__head }>
					<h2 className={ style.reviews__title }>Total reviews: { props.reviews.length }</h2>
					<div className={ style.reviews__overall }>
						<Rate label='Average rating:' rate={ rateAverage }/>
					</div>
				</div>

				<div className={ style.reviews__list }>
					{ props.reviews.map( ( review ) => (
						<Review key={ review.id } review={ review }/>
					) ) }
				</div>
			</div>
		);
	} else {
		return (
			<div className={ style.reviews }>
				No reviews yet.
			</div>
		);
	}
}

export default Reviews;
