
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActivePlayerUI from '../components/ActivePlayerUI';
import { getActivePlayer } from '../selectors/players';
import { nextTurn } from '../ducks/game';

const mapStateToProps = (state) => {
	return {
		player: getActivePlayer(state),
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({
		nextTurn,
	}, dispatch)
)(ActivePlayerUI);
