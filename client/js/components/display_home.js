import React from 'react';
import EntriesHeader from './entries_header';
import DisplayEntries from './display_entries';

export default function DisplayHome (props) {

	const isLoggedIn = props.isLoggedIn;

	if (!isLoggedIn) {
		return (
			<div className="welcome">
				<h2>Welcome to Intimini</h2>
				<button onClick={props.logInUser}>Come on in!</button>
			</div>
		)
	} else {
		return (
			<div>
				<EntriesHeader user={props.isLoggedIn} />
				<DisplayEntries
					deleteEntry={props.deleteEntry}
					user={props.isLoggedIn}
					entries={props.entriesArray}
				/>;
			</div>
		)
	}
}
