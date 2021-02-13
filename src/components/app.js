import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return <Restaurants restaurants={this.props.restaurants} />;
  }
}

//  functional component
// export default function App(props) {
//   return <Restaurants restaurants={props.restaurants} />;
// }
