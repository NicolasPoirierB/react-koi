
import React from 'react';
import PropTypes from 'prop-types';

const RemovePlayerButton = ({ player_id, can_remove_players, removePlayer }) => {
	return can_remove_players ? (
		<button className="btn btn-danger" onClick={() => { removePlayer(player_id) }}>Remove player</button>
	) : null;
}

RemovePlayerButton.propTypes = {
	player_id: PropTypes.number,
	can_remove_players: PropTypes.bool,
	removePlayer: PropTypes.func,
}

export default RemovePlayerButton;
