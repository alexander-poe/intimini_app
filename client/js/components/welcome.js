import React from 'react';

export default function Welcome (props) {
	return (
		<div className="welcome">
			<h2>Welcome to Intimini</h2>
			<button onClick={props.logInUser}>Come on in!</button>
		</div>
	)
}
