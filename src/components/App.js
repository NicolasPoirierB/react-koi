
import React from 'react';
import PropTypes from 'prop-types';
import CreatePlayerForm from '../containers/CreatePlayerForm';

const App = ({ players }) => {
	return (
		<div>
			<ul>
				{players.map(player => <li>Player {player.name}</li>)}
			</ul>

			<CreatePlayerForm />
		</div>
	);
};

App.propTypes = {
	players: PropTypes.array,
};

export default App;