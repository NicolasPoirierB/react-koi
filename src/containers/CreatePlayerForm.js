
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreatePlayerForm from '../components/CreatePlayerForm';
import { addPlayer, removePlayer } from '../ducks/players';

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
	}, dispatch)
)(CreatePlayerForm);
