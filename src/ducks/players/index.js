import { LOCATIONS, SETTINGS } from "../../Constants";

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

/**
 * Generates a unique player ID.
 */
const generatePlayerId = (() => {
	let playerIds = [];
	return () => {
		let playerId = 0;
		while(playerIds.indexOf(playerId) > -1) {
			playerId++;
		}

		playerIds.push(playerId);

		return playerId;
	};
})();

/**
 * @typedef {object} PlayerObject
 * 
 * @prop {Number} taken_city_spaces
 * @prop {Number} max_city_spaces
 * @prop {Number} points
 * @prop {Number} twigs
 * @prop {Number} pebbles
 * @prop {Number} berries
 * @prop {Number} resin
 * @prop {Number} unique_critters
 * @prop {Number} unique_buildings
 * @prop {Number} reg_critters
 * @prop {Number} reg_buildings
 * @prop {Array} available_workers
 * @prop {Array} deployed_workers
 * @prop {Number} id 
 * @prop {String} name 
 */
const defaultPlayerStats = {
	taken_city_spaces: 0,
	max_city_spaces: SETTINGS.MAX_CITY_SPACES,
	points: 0,
	twigs: 0,
	pebbles: 0,
	berries: 0,
	resin: 0,
	unique_critters: 0,
	unique_buildings: 0,
	reg_critters: 0,
	reg_buildings: 0,
}

/**
 * Generates a player object, with the given custom stats.
 * 
 * @param {object} stats 
 * 
 * @returns {PlayerObject} playerObject
 */
export const generatePlayerObject = (stats = {}) => ({
	id: generatePlayerId(),
	...defaultPlayerStats,
	...stats,
});

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