import React from 'react';

export default class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.postNewEntry(this.textInput.value, this.moodInput.value);
	}

	render () {
		return (
			<form onSubmit={this.sendAddData}>
				<ul>
					<li>
						Mood
						&nbsp;
						<input type="text" ref={moodInput => this.moodInput = moodInput} />
					</li>
					<li>
						<textarea
							rows="10"
							cols="100"
							ref={input => this.textInput = input}
						></textarea>
					</li>
					<button
						type="submit"
						className="submitButton">
						Record my thoughts
					</button>
				</ul>
			</form>
		)
	}
}
