import React from 'react';
import {connect } from 'react-redux';

import { toggleLogin } from '../actions/actions';

function Welcome (props) {

	return (
		<div className="welcome">
			<h1>Welcome to Intimini</h1>
			<button onClick={props.logInUser}>Come on in!</button>
			<br />
			<span>
				<img src="../assets/logo2.png" height="80" width="80"/>
			</span>
		</div>
	)
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	logInUser: function () {
		dispatch(toggleLogin(4))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
