import { SEASONS, SETTINGS } from "../../Constants";

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const NEXT_SEASON = 'NEXT_SEASON';

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
 * @prop {Number} season
 * @prop {Bool} trigger_green_cards
 * @prop {Bool} trigger_meadow_draw
 * @prop {Bool} game_over
 * @prop {Array} cards
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
	available_workers: [
		{ name: 'Sam' },
		{ name: 'Marie' },
	],
	deployed_workers: [],
	season: SEASONS.WINTER,
	trigger_green_cards: false,
	trigger_meadow_draw: false,
	game_over: false,
	cards: [],
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
 * @param {Object} stats_to_update 
 */
export const updatePlayer = (playerId, stats_to_update = {}) => ({
	type: UPDATE_PLAYER,
	payload: {
		playerId,
		stats_to_update,
	},
});

/**
 * End a season for a given player
 * 
 * @param {Number} playerId 
 */
export const nextSeason = (player_id) => ({
	type: NEXT_SEASON,
	payload: player_id,
});

/**
 * Apply the relevant seasonal effects caused by ending a season. When ending the 
 * last season, the property `game_over` will be set to `true`.
 * 
 * @param {PlayerObject} player 
 * 
 * @return {PlayerObject} A new PlayerObject effected by the season
 */
const applySeasonEffect = (player) => {
	const nextSeason = player.season + 1;
	let seasonalEffects = {};

	switch (nextSeason) {
		case SEASONS.SPRING:
			seasonalEffects = {
				trigger_green_cards: true,
				available_workers: [
					...player.deployed_workers, 
					{ name: 'Eugene' }, 
				],
				deployed_workers: [],
			};
			break;
		case SEASONS.SUMMER:
			seasonalEffects = {
				trigger_meadow_draw: true,
				available_workers: [
					...player.deployed_workers, 
					{ name: 'Allie' }, 
				],
				deployed_workers: [],
			};
			break;
		case SEASONS.FALL:
			seasonalEffects = {
				trigger_green_cards: true,
				available_workers: [
					...player.deployed_workers, 
					{ name: 'Bobbie' }, 
					{ name: 'Joe' },
				],
				deployed_workers: [],
			};
			break;
		case SEASONS.END:
		default:
			seasonalEffects = {
				game_over: true,
			};
			break;
	}

	return {
		...player,
		...seasonalEffects,
	}
}

const initialState = [];
export default (state = initialState, action) => {
	switch (action.type) {
		case NEXT_SEASON:
			return state.map(player => {
				if (player.id !== action.payload.player_id) {
					return player;
				}

				return applySeasonEffect(state);
			});
		case UPDATE_PLAYER:
			return state.map(player => {
				if (player.id !== action.payload.playerId) {
					return player;
				}

				return { ...player, ...action.payload.stats_to_update };
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