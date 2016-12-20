import React from 'react';
import WelcomePage from './welcome_page';
import IntiminiHome from './intimini_home';

export default function displayHome (props) {
	console.log('display home', props)
	// isLoggedIn = this.props.store.usersReducer.usersList.users[1].loggedIn;
	if (props.isLoggedIn === false) {
		return <WelcomePage />
	} else {
		return <HomePage />
	}
}
