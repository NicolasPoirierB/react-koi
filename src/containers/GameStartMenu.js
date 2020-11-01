
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GameStartMenu from '../components/GameStartMenu';
import { addPlayer, removePlayer } from '../ducks/players';
import { startGame } from '../ducks/game';
import { SETTINGS } from '../Constants';

const mapStateToProps = (state) => {
	return {
		players: state.players,
		can_start_game: state.players.length >= SETTINGS.MIN_PLAYER_COUNT,
		can_add_players: state.players.length < SETTINGS.MAX_PLAYER_COUNT,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({
        addPlayer,
		removePlayer,
		startGame,
	}, dispatch)
)(GameStartMenu);
