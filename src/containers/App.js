import React, { Component } from 'react';
import CardList from '../components/CardList';
// Import array containing robot objects.
// import { robots } from './robots.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	// Call the father constructor and set a state variable with custom objects defined.
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}


	componentDidMount() {
		// fetch requests information from an api.
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({ robots: users }))
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
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		if(!this.state.robots.length){
			return <h1>Loading...</h1>
		}
		else{
			return (
				<div className="tc">
					<h1 className="title ">ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;