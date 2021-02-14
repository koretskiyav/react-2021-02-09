import React from 'react';

import style from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as StarFull } from '../icons/starfull.svg';

export default function Rate( props ) {

	const
		stars = [],
		maxRating = 5;

	for (let i = 1; i <= maxRating; i++) {
		i <= props.rating ?
			stars.push( <Star key={i} className={style.icon} /> ) :
			stars.push( <StarFull key={i} className={style.icon} /> );
	}

	return (
		<div className={style.rate}>
			<strong className={style.rate__item}>{ props.rating }</strong>
			{ stars }
		</div>
	);
}
