
const START_GAME = 'START_GAME';

/**
 * Starts the game.
 */
export const startGame = () => ({
	type: START_GAME,
});



const defaultGameState = {
	has_started: false,
};
export default (state = defaultGameState, action) => {
	switch (action.type) {
		case START_GAME:
			return {
				...state,
				has_started: true,
			};
		default:
			return state;
	}
};	