import React, { Component } from 'react';

import ActivePlayerUI from '../containers/ActivePlayerUI';

import Map from './Map';

export default class GameUI extends Component {
	render() {
		return (
			<div className="container">
				<Map />

				<ActivePlayerUI />
			</div>
		)
	}
}
