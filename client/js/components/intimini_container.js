import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import EntriesHeader from './entries_header';
import DisplayEntries from './display_entries';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.logInUser = this.logInUser.bind(this);
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

	render () {

		const stateUsers = this.props.store.usersReducer.usersList;
		const stateEntries = this.props.store.entriesReducer.entriesList;
		let users, entries;

		!stateUsers ?
		users = '' :
		users = stateUsers.map((user, idx) => {
			return user
		})

		!stateEntries ?
		entries = '' :
		entries = stateEntries.entries.map((entry, idx) => {
			return entry
		})

	if (this.anyoneHome(users)) {
		var isLoggedIn = this.anyoneHome(users);
		return (
			<div>
				<EntriesHeader user={isLoggedIn} />
				<DisplayEntries
					user={isLoggedIn}
					entries={entries}
				/>;
			</div>
		)
	} else if (users.length > 0 && entries.length > 0) {
		return (
			<div className="welcome">
				<h2>Welcome to Intimini</h2>
				<button onClick={this.logInUser}>Come on in!</button>
			</div>
		)
	} else {
			return <h4>There was an error accessing the server. Please try again in a moment.</h4>
		}
	}
}

const mapStateToProps = (state, props) => ({
	store: state
})

export default connect(mapStateToProps)(LoginContainer);
