import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.sendDelete = this.sendDelete.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
	}

	sendDelete (event) {
		this.props.dispatch(actions.deleteUser());
	}

	render() {
		let users;
		debugger;
		if (!this.props.store.userslist.users) {
			users = ''
		} else {
			users = this.props.store.userslist.users.map((user, idx) => {
				return <li key={idx}>{user.username}</li>
			})
		}
		return (
			<div>
				<ul>
					{users}
				</ul>
				<button onClick={this.sendDelete} />
			</div>
		)
	}

}

const mapStateToProps = (state, props) => ({
	store: state
})

export default connect(mapStateToProps)(WelcomePage);
