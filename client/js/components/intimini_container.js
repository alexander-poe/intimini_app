import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import EntriesHeader from './entries_header';
import NewEntry from './new_entry';
import DisplayEntries from './display_entries';
import DisplayOneEntry from './display_one_entry';
import Welcome from './welcome';
import ErrorDisplay from './error_display';

// HARD CODED:
// logged-in user id

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.selectAndUpdate = this.selectAndUpdate.bind(this);
		this.postNewEntry = this.postNewEntry.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
		this.updateEntry = this.updateEntry.bind(this);
		this.showNewEntry = this.showNewEntry.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

// USERS

	anyoneHome (users) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].loggedIn) {
				return users[i];
			}
		}
		return false;
	}

// ENTRIES
	showNewEntry() {
		this.props.dispatch(actions.showNewEntry());
	}

	selectAndUpdate (id, mood, selected, entry) {
		this.showNewEntry();
		this.props.dispatch(actions.selectAndUpdate(id, mood, selected, entry));
	}

	postNewEntry (text, mood) {
		this.props.dispatch(actions.postNewEntry(text, mood));
	}

	deleteEntry (id) {
		this.props.dispatch(actions.deleteEntry(id));
	}

	updateEntry (id, mood, selected, entry) {
		this.props.dispatch(actions.updateEntry(id, mood, selected, entry));
	}

	render () {

		const stateUsers = this.props.store.usersReducer.usersList;
		const stateEntries = this.props.store.entriesReducer.entriesList;
		let users, entries = [], filteredEntries = [];

		!stateUsers ?
		users = '' :
		users = stateUsers.map((user, idx) => {
			return user;
		})

		if (!stateEntries) {
			entries = '';
		} else {
			entries = stateEntries.entries.map((entry, idx) => {
				return entry;
			});
			filteredEntries = stateEntries.entries.filter((entry) => {
				return (entry.selected === true)
			});
		}

		console.log('ENTRIES', entries);
		console.log('FILTERED', filteredEntries);

	if (this.anyoneHome(users)) {
		var isLoggedIn = this.anyoneHome(users);
		// looking at multiple entries
		if (this.props.store.showReducer === true) {
			return (
				<div>
					<EntriesHeader user={isLoggedIn} />
					<NewEntry postNewEntry={this.postNewEntry} />
					<DisplayEntries
						user={isLoggedIn}
						entries={entries}
						toggleShow={this.toggleShow}
						selectAndUpdate={this.selectAndUpdate}
					/>;
				</div>
			)
		} else {
			return (
				<div>
					<EntriesHeader user={isLoggedIn} />
					<DisplayOneEntry
						user={isLoggedIn}
						entries={entries}
						toggleShow={this.toggleShow}
						selectAndUpdate={this.selectAndUpdate}
						deleteEntry={this.deleteEntry}
					/>;
				</div>
			)
		}
	} else if (users.length > 0 && entries.length > 0) {
			return (
				<Welcome />
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
