import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--blue bg-lightest-blue"
				type="search" 
				placeholder="Robot name"
				// In here the callback function received is assigned to an event listener: 'onChange'
				// That is executed everytime the input inner value changes.
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;