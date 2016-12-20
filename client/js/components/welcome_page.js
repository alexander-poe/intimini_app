import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Entry from './entry'

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(actions.getUser());
	}

	render() {
		console.log(this.props.user[0].username)
		return (
			<div>
				
				<h2>OH HAI: </h2>
			</div>
		)
	}
}



const mapStateToProps = (state, props) => ({
	user: state.user,
	message: state.message

})

export default connect(mapStateToProps)(WelcomePage);
