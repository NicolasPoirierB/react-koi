
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RemovePlayerButton from '../components/RemovePlayerButton';
import { removePlayer } from '../ducks/players';


const mapStateToProps = (state, props) => {
	return {
		...props,
		can_remove_players: !state.game.has_started,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({
		removePlayer,
	}, dispatch)
)(RemovePlayerButton);
