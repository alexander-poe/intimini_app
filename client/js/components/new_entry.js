import React from 'react';

class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.postNewEntry(this.textInput.value, this.moodInput.value);
		this.textInput.value = '';
		this.moodInput.value = '';
	}

	render () {
		return (
			<form className="textarea" onSubmit={this.sendAddData}>
				<ul>
					<li>
						&nbsp;
						<input
						type="text"
						className="textinput"
						placeholder="mood"
						ref={moodInput => this.moodInput = moodInput}
						/>
					</li>
					<li>
						<textarea
						    id="clear"
							className="textinput"
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

export default NewEntry;
