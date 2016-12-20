import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import WelcomePage from './welcome_page';
// import IntiminiHome from './intimini_home';
import DisplayHome from './display_home';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

	render() {
		return (
			<displayHome isLoggedIn={true} />
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
})

export default connect(mapStateToProps)(LoginContainer);
