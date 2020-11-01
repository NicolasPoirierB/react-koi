
import React from 'react';
import PropTypes from 'prop-types';
import GameStartMenu from '../containers/GameStartMenu';
import PlayerList from '../containers/PlayerList';
import GameUI from '../containers/GameUI';

const App = ({ has_started }) => {
	return (
		<div className="app">
			{has_started ? <GameUI /> : <GameStartMenu />}
			<PlayerList />
		</div>
	);
};

App.propTypes = {
	has_started: PropTypes.bool,
};

export default App;