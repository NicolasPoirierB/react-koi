
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { generatePlayerObject } from '../ducks/players'; 
import { SETTINGS } from '../Constants';

//#region styles
const Form = styled.div`
	display: block;
	padding: 30px;
	border: 1px solid #eee;
	border-radius: 3px;
`;

const Label = styled.label`
	font-weight: bold;

	input {
		display: block;
		margin: 10px 0;
	}
`;
//#endregion

const defaultPlayerState = {
	name: '',
};

const CreatePlayerForm = ({ players, can_start_game, can_add_players, addPlayer, startGame }) => {
	const [player, setPlayer] = useState(defaultPlayerState);

	const onInputChange = (e) => {
		setPlayer({
			[e.currentTarget.getAttribute('name')]: e.currentTarget.value,
		});
	}

	const submit = () => {
		const playerObj = generatePlayerObject(player);
		addPlayer(playerObj);
		
		// Reset after submit
		setPlayer(defaultPlayerState);
	}

	const renderPlayerCreationForm = () => {
		if (can_add_players) {
			return (
				<>
					<h2>Add players to start the game</h2>
					<p>Players: {players.length} / {SETTINGS.MAX_PLAYER_COUNT}</p>
					
					<div className="form-group">
						<Label>
							Player name
							<input name="name" onChange={onInputChange} value={player.name} />
						</Label>

						<button className="btn btn-primary" onClick={submit}>Add Player</button>
					</div>
				</>
			);
		}
	}

	const renderGameStartButton = () => {
		if (can_start_game) {
			return (
				<div className="form-group">
					<h2>You may now start the game</h2>
					<button className="btn btn-success" onClick={startGame}>Start the game</button>
				</div>
			);
		}
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<Form>
						{renderPlayerCreationForm()}
						{renderGameStartButton()}
					</Form>
				</div>
			</div>
		</div>
	);
};

CreatePlayerForm.propTypes = {
	players: PropTypes.array,
	addPlayer: PropTypes.func,
	startGame: PropTypes.func,
};

export default CreatePlayerForm;