import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class WelcomePage extends React.Component {
	constructor(props) {
		console.log('welcome page', props.store);
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
		const users = this.props.store.userslist.map((user, idx) => {
			return <li key={idx}>{user.username}</li>
		})

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
