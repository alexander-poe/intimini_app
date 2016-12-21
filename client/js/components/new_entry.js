import React from 'react';

// HARD CODED:
// new entry text

export default class NewEntry extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<form>
				<ul>
					<li>
						<input
							rows="10"
							cols="100"
							type="text"
							ref={input => this.textInput = input}
							defaultValue="New entry..."
						></input>
					</li>
					<button
						onClick={this.props.postNewEntry.bind(null, this.textInput)}
						type="submit"
						className="submitButton">
						Record my thoughts
					</button>
				</ul>
			</form>
		)
	}

}
