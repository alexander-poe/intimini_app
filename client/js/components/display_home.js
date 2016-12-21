import React from 'react';
import EntriesHeader from './entries_header';
import DisplayEntries from './display_entries';

export default function DisplayHome (props) {

	// console.log('display home', props);

	const isLoggedIn = props.isLoggedIn;

	if (!isLoggedIn) {
		return (
			<div>
				<h2>Welcome to Intimini</h2>
				<button onClick={props.onClick}>Come on in!</button>
			</div>
		)
	} else {
		return (
			<div>
				<EntriesHeader user={props.isLoggedIn} />
				<DisplayEntries
					user={props.isLoggedIn}
					entries={props.entriesArray}
				/>;
			</div>
		)
	}
}
