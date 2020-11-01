
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GameUI from '../components/GameUI';

const mapStateToProps = (state) => {
	return {
		has_started: state.game.has_started,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(GameUI);
