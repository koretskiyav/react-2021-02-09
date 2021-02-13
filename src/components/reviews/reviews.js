import React from 'react';
import Rate from '../rate';
import style from './review.module.css';

function Reviews(props) {
	return (
		<div>
			<h3 className={style.review_title}>Reviews:</h3>
			{props.reviews.map((review) => (
				<div key={review.id} className={style.review_box}>
					<p className={style.user_name}>{review.user}</p>
					<p>{review.text}</p>
					<Rate key={review.id} rating={review.rating} />
				</div>
			))}
		</div>
	);
}

export default Reviews;
