import React from 'react'

const Card = (props) => {
	// Destructures the object properties passed by parameter (property.)
	const { id, name, email } = props;
	// robohash creates a robot image based on a random url, this case id.
	const imgUrl = `https://robohash.org/${id}?size=200x200&set=set3`;

	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={imgUrl} alt={name}/> 
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;