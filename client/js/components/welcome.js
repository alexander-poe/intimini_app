import React from 'react';
import {connect } from 'react-redux';

import { toggleLogin } from '../actions/actions';

function Welcome (props) {

	return (
		<div className="welcome">
			<h2>Welcome to Intimini</h2>
			<button onClick={props.logInUser}>Come on in!</button>
			<br />
			<span>
				{'Place image here'}
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
