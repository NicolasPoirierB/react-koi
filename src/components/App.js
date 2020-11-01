
import React from 'react';
import PropTypes from 'prop-types';
import CreatePlayerForm from '../containers/CreatePlayerForm';
import PlayerList from '../containers/PlayerList';
import Map from './Map';

const App = ({ has_started }) => {
	return (
		<div className="app">
			{
				has_started ? (
					<Map />
				) : (
					<CreatePlayerForm />
				)
			}
			<PlayerList />
		</div>
	);
};

App.propTypes = {
	has_started: PropTypes.bool,
};

export default App;