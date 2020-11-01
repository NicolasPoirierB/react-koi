


import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';

const PlayerList = ({ players }) => {
	return (
		<div className="player-list">
			<div className="container">
				<div className="row">
					{players.map(player => <PlayerCard key={player.id} {...player} />)}
				</div>
			</div>
		</div>
	)
}

PlayerList.propTypes = {
	players: PropTypes.array,
};

export default PlayerList;
