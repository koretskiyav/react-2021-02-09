import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
	static propTypes = {
		restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
	};

	state = {error: null};

	componentDidCatch(error) {
		this.setState({error});
	}

	render() {
		if (this.state.error) {
			return <p>Сейчас рестораны временно недоступно :(</p>;
		}
		return (
			<div>
				<Header />
				<Restaurants restaurants={this.props.restaurants} />
			</div>
		);
	}
}
