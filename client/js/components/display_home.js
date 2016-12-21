import React from 'react';

export default function DisplayHome (props) {

	console.log('display home', props);

	const isLoggedIn = props.isLoggedIn;

	const logIn = (event) => {
		props.isLoggedIn = true;
	}

	if (!isLoggedIn) {
		return (
			<div>
				<h2>Welcome to Intimini</h2>
				<button onClick={props.onClick}>Come on in!</button>
			</div>
		)
	} else {
		return <div>Hello and welcome, Mrs. Logged-In!</div>;
	}

}
