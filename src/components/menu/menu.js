import React from 'react';
import Product from '../products/product';
import style from './menu.module.css'

export default function Menu(props) {
	return (
		<div>
			<h3 className={style.menu_title}>Menu</h3>
			{props.menu.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}
