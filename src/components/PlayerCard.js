
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RemovePlayerButton from '../containers/RemovePlayerButton';

const PlayerCardDiv = styled.div`
	padding: 30px;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

const PlayerCard = ({ id, name, buildings_count, max_buildings_count }) => {
	return (
		<PlayerCardDiv>
			<div className="player-name">{name}</div>
			<div className="player-hp">Buildings : {buildings_count} / {max_buildings_count}</div>

			<RemovePlayerButton player_id={id} />
		</PlayerCardDiv>
	);
}

PlayerCard.propTypes = {

}

export default PlayerCard;
