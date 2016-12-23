import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class EntriesHeader extends React.Component {
	constructor(props) {
		super(props);
		this.changeFilter = this.changeFilter.bind(this);
	}

	changeFilter (e) {
		e.preventDefault();
		let filterVal = this.mood.value;
		this.props.dispatch(actions.selectMood(filterVal));
	}

	render () {
		return (
			<div className="menu-bar">
				<span>
					<img src="../assets/logo2.png" height="35" width="35"/>
				</span>
				<hr />
				<form onSubmit={this.changeFilter}>
					<select ref={input => this.mood = input}>
						<option value="all">Mood</option>
						<option value="all">All</option>
						<option value="happy">Happy</option>
						<option value="excited">Excited</option>
						<option value="awkward">Awkward</option>
						<option value="ambivalent">Ambivalent</option>
						<option value="bored">Bored</option>
						<option value="sad">Sad</option>
						<option value="depressed">Depressed</option>
					</select>
					<button type="submit">Filter</button>
				</form>
				<hr />
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(EntriesHeader);
