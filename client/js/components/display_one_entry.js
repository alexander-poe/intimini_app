import React from 'react';

class DisplayOneEntry extends React.Component {
	constructor (props) {
		console.log('display one entry', props);
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.updateEntry(this.props.entries[0].id, this.textInput.value);
	}

	render () {
		const entry = this.props.entries[0];
		return (
			<form 
			className="textarea" 
			onSubmit={this.sendAddData}
			>
				<ul>
					<li>{entry.mood}</li>
					<li><textarea
						className="textinput" 
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

export default DisplayOneEntry;
