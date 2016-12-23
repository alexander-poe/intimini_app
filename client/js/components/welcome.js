import React from 'react';
import {connect } from 'react-redux';

import { toggleLogin } from '../actions/actions';

function Welcome (props) {
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const time = new Date();
	const d = time.getDay();
	const day = days[d];
	const date = time.getDate();
	const message = `${day}`

	return (
		<div className="welcome">
			<img src="../assets/calendar.png" height="50" width="50"/>
			<h2>Mood Calendar</h2>
				<hr/>
			
			<br />
			<span>
				<h4> {message} </h4>
				<h4> {date} </h4>
				<button 
				className="pure-button"
				onClick={props.logInUser}>Come on in!</button>
			</span>
		</div>
	)
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	logInUser: function () {
		dispatch(toggleLogin(1))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
