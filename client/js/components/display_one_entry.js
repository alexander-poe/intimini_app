import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class DisplayOneEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getEntries());
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.dispatch(actions.updateEntry(
			this.props.entries[0].id,
			this.props.entries[0].mood,
			this.props.entries[0].selected,
			this.textInput.value));
	}

	render () {
		console.log('display one entry', this.props);
		const entry = this.props.entries[0];
		return (
			<form onSubmit={this.sendAddData}>
				<ul>
					<li>{entry.mood}</li>
					<li><textarea
						rows="10"
						cols="100"
						ref={input => this.textInput = input}
						defaultValue={entry.entry} />
					</li>
					<button type="submit">Edit</button>
					&nbsp;
					<button
						onClick={this.props.deleteEntry.bind(null, entry.id)}
						className="delete-button">
						Delete
					</button>
				</ul>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(DisplayOneEntry);
