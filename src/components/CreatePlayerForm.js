
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { generatePlayerObject } from '../ducks/players'; 

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

const CreatePlayerForm = ({ addPlayer }) => {
	const [player, setPlayer] = useState({});

	const onInputChange = (e) => {
		setPlayer({
			[e.currentTarget.getAttribute('name')]: e.currentTarget.value,
		});
	}

	return (
		<Form>
			<Label>
				Player name
				<input name="name" onChange={onInputChange} />
			</Label>

			<button onClick={() => addPlayer(generatePlayerObject(player))}>Add Player</button>
		</Form>
	);
};

CreatePlayerForm.propTypes = {
	addPlayer: PropTypes.func,
};

export default CreatePlayerForm;