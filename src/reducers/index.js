
import { combineReducers } from 'redux';
import game from '../ducks/game';
import players from '../ducks/players';

const appReducer = combineReducers({
	game,
	players,
});

export default (state, action) => appReducer(state, action);
