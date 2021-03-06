
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		has_started: state.game.has_started,
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(App);
