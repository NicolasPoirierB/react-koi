
import { combineReducers } from 'redux';
import players from '../ducks/players';

const appReducer = combineReducers({
    players,
});

export default (state, action) => appReducer(state, action);
