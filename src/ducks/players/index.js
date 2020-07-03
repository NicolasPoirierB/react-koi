
export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

/**
 * Adds a player to the game.
 * 
 * @param {PlayerObject} player 
 */
export const addPlayer = (player) => ({
	type: ADD_PLAYER,
	payload: player,
});

/**
 * Removes a player from the list.
 * 
 * @param {Number} playerId 
 */
export const removePlayer = (playerId) => ({
	type: REMOVE_PLAYER,
	payload: playerId,
});

/**
 * Updates a player's stats.
 * 
 * @param {Number} playerId 
 * @param {Object} statsToUpdate 
 */
export const updatePlayer = (playerId, statsToUpdate = {}) => ({
	type: UPDATE_PLAYER,
	payload: {
		playerId,
		statsToUpdate,
	},
});

const initialState = [];
export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PLAYER:
			return state.map(player => {
				if (player.id !== action.payload.playerId) {
					return player;
				}

				return { ...player, ...action.payload.statsToUpdate };
			});
		case REMOVE_PLAYER:
			return state.filter(player => player.id !== action.payload);
		case ADD_PLAYER:
			return [
				...state,
				{ ...action.payload },
			];
		default:
			return state;
	}
};