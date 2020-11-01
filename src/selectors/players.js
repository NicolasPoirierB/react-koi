
import { createSelector } from 'reselect'

const getPropsPlayer = (state, props) => props.player;
const getStatePlayers = state => state.players;
const getPlayerIds = state => state.players.map(p => p.id);
const getTurn = state => state.game.turn;

export const getActivePlayerID = createSelector(
	[getPlayerIds, getTurn],
	(playerIds, turn) => {
		const pos = turn < playerIds.length ? turn : turn % playerIds.length;
		return playerIds[pos];
	}
)

export const getPlayer = createSelector(
	[getPropsPlayer, getActivePlayerID],
	(player, active_player_id) => {
		return {
			...player,
			is_active: player.id === active_player_id,
		};
	}
)

export const getActivePlayer = createSelector(
	[getStatePlayers, getActivePlayerID],
	(players, active_player_id) => {
		const player = players.filter(p => p.id === active_player_id)[0];
		return {
			...player,
			is_active: true,
		};
	}
)
