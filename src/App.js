import React, { Component } from 'react';
import CardList from './CardList';
// Import array containing robot objects.
import { robots } from './robots.js';
import SearchBox from './SearchBox';

class App extends Component {
	// Call the father constructor and set a state variable with custom objects defined.
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	// This function receives the event that triggered it.
	onSearchChange = (event) => {
		// Cant change a state object directly, as the Virtual Dom wouldnt know which component needs to refresh.
		// Instead we use a setState (Hooks?)
		this.setState({ searchField: event.target.value });
	}

	render(){
		// SearchBox (custom component) receives a callback function we created: 'onSearchChange' as a prop: 'searchChange'

		// In this case we are not altering a state object, but creating a filtered copy of the robots array.
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;