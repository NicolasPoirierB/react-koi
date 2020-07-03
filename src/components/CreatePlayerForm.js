
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreatePlayerForm = ({ addPlayer }) => {
    const [player, setPlayer] = useState({ playerId: Math.round(Math.random(1, 200000000)) });

    const onInputChange = (e) => {
        setPlayer({
            [e.currentTarget.getAttribute('name')]: e.currentTarget.value,
        });
    }

    return (
        <form>
            <label>
                Player name
                <input name="name" onChange={onInputChange} />
            </label>

            <button onClick={(e) => {
                e.preventDefault();

                addPlayer(player)}
            }>Add Player</button>
        </form>
    );
};

CreatePlayerForm.propTypes = {};

export default CreatePlayerForm;