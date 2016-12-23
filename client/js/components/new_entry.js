import React from 'react';

class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.moodInput.value === 'mood' ?
			this.moodInput.value = '' :
			this.moodInput.value;
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
						<select ref={input => this.moodInput = input}>
							<option value="mood">Mood</option>
							<option value="happy">Happy</option>
							<option value="excited">Excited</option>
							<option value="awkward">Awkward</option>
							<option value="ambivalent">Ambivalent</option>
							<option value="bored">Bored</option>
							<option value="sad">Sad</option>
							<option value="depressed">Depressed</option>
						</select>
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
