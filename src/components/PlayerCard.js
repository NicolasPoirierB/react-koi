
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RemovePlayerButton from '../containers/RemovePlayerButton';

const PlayerCardDiv = styled.div`
	display: flex;
	flex-direction: column;

	.content {
		flex: 1 1 100%;

		padding: 30px;
		border: 1px solid #eee;
		border-radius: 3px;
		margin-top: 30px;
	}

	.stat-group {
		margin-bottom: 20px;
	}

	.group-title {
		font-weight: bold;
	}

	&.active {
		.content {
			border: 1px solid green;
			box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.1);
		}
	}
`;

const PlayerCard = (props) => {
	const activeClass = props.is_active ? 'active' : null;

	return (
		<PlayerCardDiv className={`col-md-3 ${activeClass}`}>
			<div className="content">
				<div className="stat-group">
					<div className="group-title">Player info</div>
					<div className="group-content">
						<div className="player-name">{props.name}</div>
						<div className="player-hp">City spaces : {props.taken_city_spaces} / {props.max_city_spaces}</div>
						<div className="player-points">{props.points} points</div>
					</div>
				</div>

				<div className="stat-group">
					<div className="group-title">Resources</div>
					<div className="group-content">
						<div className="resource">{props.twigs} twigs</div>
						<div className="resource">{props.pebbles} pebbles</div>
						<div className="resource">{props.berries} berries</div>
						<div className="resource">{props.resin} resin</div>
					</div>
				</div>

				<div className="stat-group">
					<div className="group-title">Other stats</div>
					<div className="group-content">
						<div className="resource">{props.unique_critters} unique critters</div>
						<div className="resource">{props.unique_buildings} unique buildings</div>
						<div className="resource">{props.reg_critters} regular critters</div>
						<div className="resource">{props.reg_buildings} regular buildings</div>
					</div>
				</div>

				<RemovePlayerButton player_id={props.id} />
			</div>
		</PlayerCardDiv>
	);
}

PlayerCard.propTypes = {

}

export default PlayerCard;
