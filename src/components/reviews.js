import React from 'react';
import Rate from "./rate";

import style from './reviews.module.css';

export default function Reviews(props) {

	return (
		<div className={style.reviews}>
			<h2 className={style.reviews__title}>Reviews:</h2>
			<div className={style.reviews__wrap}>
				{props.reviews.map((review) => (
					<div key={review.id} className={style.review}>
						<h4>{review.user}</h4>
						<Rate rating={review.rating} />
						<p>{review.text}</p>
					</div>
				))}
			</div>

		</div>
	);
}
