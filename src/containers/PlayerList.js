
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerList from '../components/PlayerList';

const mapStateToProps = (state) => {
	return {
		players: state.players,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(PlayerList);
