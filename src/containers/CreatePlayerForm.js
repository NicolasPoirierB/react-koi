
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreatePlayerForm from '../components/CreatePlayerForm';
import { addPlayer, removePlayer } from '../ducks/players';
import { startGame } from '../ducks/game';

const mapStateToProps = (state) => {
	return {
		players: state.players,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({
        addPlayer,
		removePlayer,
		startGame,
	}, dispatch)
)(CreatePlayerForm);
