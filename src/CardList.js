import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
	// Loops through the array of objects passed by property and creates a Card component
	// which then saves in another array
	const cardsArray = robots.map(user => {
		return (<Card key={user.id} id={user.id} name={user.name} email={user.email} />);
	})

	return (
		<div>
			{
				// Returns that array with Card components.
				// As this block is wrapped in {} it is interpreted as js.
				// So I could write that whole loop inside this block.
				cardsArray
			}
		</div>
	);
}

export default CardList;