
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActivePlayerUIDiv = styled.div`
	padding: 20px 0;

	.intro {
		margin-bottom: 10px;
	}

	.buttons {
		display: flex;
		align-items: center;

		button + button {
			margin-left: 10px;
		}
	}
`;

const ActivePlayerUI = ({ player, nextTurn }) => {
	const canDeployWorkers = player.available_workers.length > 0;
	const canPlayCard = player.cards.length > 0;
	const canEndSeason = !canDeployWorkers && !canPlayCard;

	return (
		<ActivePlayerUIDiv>
			<div className="row">
				<div className="col-md-12 intro">
					<strong>It's {player.name}'s turn!</strong>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 buttons">
					<button className="btn btn-primary" disabled={!canDeployWorkers}>Deploy worker</button>
					<button className="btn btn-primary" disabled={!canPlayCard}>Play a card</button>
					<button className="btn btn-warning" disabled={!canEndSeason}>End season</button>

					{/* for testing purposes, remove afterwards */}
					<button className="btn btn-danger" onClick={nextTurn}>End turn</button>
				</div>
			</div>
		</ActivePlayerUIDiv>
	);
}

ActivePlayerUI.propTypes = {
	player: PropTypes.object,
	nextTurn: PropTypes.func,
}

export default ActivePlayerUI;
