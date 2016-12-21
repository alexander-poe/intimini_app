import React from 'react';

// HARD CODED:
// new entry text
// this is not working and it is incredibly frustrating

export default class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.postNewEntry(this.textInput.value);
	}

	render () {
		return (
			<form onSubmit={this.sendAddData}>
				<ul>
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
