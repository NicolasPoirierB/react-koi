
const START_GAME = 'START_GAME';
const NEXT_TURN = 'NEXT_TURN';

/**
 * Starts the game.
 */
export const startGame = () => ({
	type: START_GAME,
});

/**
 * Called when a player ends his actions for a turn. Allows
 * to change the active player.
 */
export const nextTurn = () => ({
	type: NEXT_TURN,
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
				turn: state.turn + 1,
			}
		default:
			return state;
	}
};	