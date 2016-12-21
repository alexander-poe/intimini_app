import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import EntriesHeader from './entries_header';
import DisplayEntries from './display_entries';
import Welcome from './welcome';
import ErrorDisplay from './error_display';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.logInUser = this.logInUser.bind(this);
		this.selectEntry = this.selectEntry.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

// USERS

	logInUser (event) {
		this.props.dispatch(actions.toggleLogIn(4));
	}

	anyoneHome (users) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].loggedIn) {
				return users[i];
			}
		}
		return false;
	}

// ENTRIES

selectEntry (id) {
	this.props.dispatch(actions.getEntries(id));
}

	render () {

		const stateUsers = this.props.store.usersReducer.usersList;
		const stateEntries = this.props.store.entriesReducer.entriesList;
		let users, entries = [];

		console.log('get entries', stateEntries);

		!stateUsers ?
		users = '' :
		users = stateUsers.map((user, idx) => {
			return user;
		})

		if (!stateEntries) {
			entries = '';
		// } else if (!stateEntries.entries) {
		// 	entries = '';
	} else if (stateEntries.entry) {
			entries.push(stateEntries.entry[0]);
		} else {
			entries = stateEntries.entries.map((entry, idx) => {
				return entry;
			});
		}


	if (this.anyoneHome(users)) {
		var isLoggedIn = this.anyoneHome(users);
		return (
			<div>
				<EntriesHeader user={isLoggedIn} />
				<DisplayEntries
					user={isLoggedIn}
					entries={entries}
					selectEntry={this.selectEntry}
				/>;
			</div>
		)
	} else if (users.length > 0 && entries.length > 0) {
			return (
				<Welcome logInUser={this.logInUser} />
			)
	} else {
			return (
				<ErrorDisplay />
			)
		}
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(LoginContainer);
