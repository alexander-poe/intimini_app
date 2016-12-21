import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import DisplayHome from './display_home';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.updateState = this.updateState.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

	updateState (event) {
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

		if (users.length > 0 && entries.length > 0) {
			return <DisplayHome
				isLoggedIn={this.anyoneHome(users)}
				onClick={this.updateState}
				usersArray={users}
				entriesArray={entries}
			/>
		} else {
			return <div>Nothing</div>
		}
	}
}

const mapStateToProps = (state, props) => ({
	store: state
})

export default connect(mapStateToProps)(LoginContainer);
