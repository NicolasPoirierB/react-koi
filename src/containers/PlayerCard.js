

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerCard from '../components/PlayerCard';
import { getPlayer } from '../selectors/players';

const mapStateToProps = (state, props) => {
	return {
		...getPlayer(state, props),
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(PlayerCard);
