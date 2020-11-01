
const START_GAME = 'START_GAME';
const NEXT_TURN = 'NEXT_TURN';

/**
 * Starts the game.
 */
export const startGame = () => ({
	type: START_GAME,
});

/**
 * Changes the active player.
 */
export const nextTurn = (next_player_id) => ({
	type: NEXT_TURN,
	payload: next_player_id,
});


const defaultGameState = {
	has_started: false,
	turn: 0,
};
export default (state = defaultGameState, action) => {
	switch (action.type) {
		case START_GAME:
			return {
				...state,
				has_started: true,
			};
		case NEXT_TURN:
			return {
				...state,
				turn: state.turn++,
				active_player: action.payload,
			}
		default:
			return state;
	}
};	