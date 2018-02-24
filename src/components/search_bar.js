import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) { // only class based components have state, so this constructor method initializes the state
		super(props); // Component (the parent class) has a constructor function, pass props to it

		// State is a plain js object that exists on any component that is class-based, each instance has its own copy of state
		// Create a new object, assign to this.state, the object contains a property to record on the state: term (the search term from the input - can be named anything)
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	// react will only know if the state changes when you use this.setState
	// referencing this.state.term is fine, but never do this.state.term = something, because react won't recognize it as a state change
}

export default SearchBar;