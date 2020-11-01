
import React from 'react';
import styled from 'styled-components';

const MapDiv = styled.div`
	display: none;
	min-height: 500px;
`;

const Map = () => {
	return (
		<MapDiv>
			<div className="row">
				<div className="col-md-3 season">Winter</div>
				<div className="col-md-3 season">Spring</div>
				<div className="col-md-3 season">Summer</div>
				<div className="col-md-3 season">Fall</div>
			</div>

			<div className="row">
				<div className="col-md-3 special-event">Special event 1</div>
				<div className="col-md-3 special-event">Special event 2</div>
				<div className="col-md-3 special-event">Special event 3</div>
				<div className="col-md-3 special-event">Special event 4</div>
			</div>

			<div className="row">
				<div className="col-md-3 event">
					City monument
				</div>
				<div className="col-md-3 event">
					World tour
				</div>
				<div className="col-md-3 event">
					Harvest festival
				</div>
				<div className="col-md-3 event">
					Cartographer's edition
				</div>
			</div>

			<div className="row">
				<div className="col-md-3">
					<div className="triple-twig">Triple twig</div>
					<div className="two-twigs-card">2 twigs + 1 card</div>
				</div>
				<div className="col-md-3">
					<div className="double-resin">Double resin</div>
					<div className="resin-card">1 resin + 1 card</div>
				</div>
				<div className="col-md-3">
					<div className="cards-point">2 cards + 1 point</div>
					<div className="pebble">1 pebble</div>
				</div>
				<div className="col-md-3">
					<div className="berry-card">1 berry + 1 card</div>
					<div className="berry">1 berry</div>
				</div>
			</div>

			<div className="row">
				<div className="forest-1 col-md-3">
					<div className="forest-card">Forest card 1</div>
					<div className="forest-card">Forest card 2</div>
				</div>

				<div className="meadow col-md-6">
					<div className="card">Meadow card 1</div>
					<div className="card">Meadow card 2</div>
					<div className="card">Meadow card 3</div>
					<div className="card">Meadow card 4</div>
					<div className="card">Meadow card 5</div>
					<div className="card">Meadow card 6</div>
				</div>

				<div className="forest-2 col-md-3">
					<div className="forest-card">Forest card 3</div>
					<div className="forest-card">Forest card 4</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					Journey
				</div>
				<div className="col-md-6">
					Haven
				</div>
			</div>
		</MapDiv>
	);
}

export default Map;
