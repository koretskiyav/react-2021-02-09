import React from 'react';

import style from './rate.module.css'
import { ReactComponent as Star } from '../icons/star.svg';

function Rate( props ) {
	const label = props.label ? <div className={ style.box__label }>{ props.label }</div> : '';
	const rate = undefined !== props.rate && parseFloat( props.rate ) ? props.rate : 0;
	let color;

	switch ( true ) {
		case rate < 3:
			color = 'red';
			break;

		case rate >= 3 && rate < 4:
			color = 'orange';
			break;

		case rate >= 4:
			color = 'green';
			break;

		default:
			color = '#000';
	}

	return (
		<div className={ style.box }>
			{ label }
			<Star className={ style.box__star } style={ { 'fill': color } }/>
			<div className={ style.box__stars }>{ rate }/5</div>
		</div>
	);
}

export default Rate;
