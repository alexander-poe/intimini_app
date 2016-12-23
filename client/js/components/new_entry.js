import React from 'react';
import {connect } from 'react-redux';
import { getEntries } from '../actions/actions';

class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		console.log('here',props)
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		if (e.key === 'Enter') {
			console.log(this.props)
			e.preventDefault();
			this.props.postNewEntry(this.textInput.value, this.moodInput.value);
			this.textInput.value = '';
			this.moodInput.value = '';
		}
	}




	render () {
		return (
			<form 
			className="textarea" 
			onKeyPress={this.sendAddData}>
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
						    placeholder="Press Enter to Submit..."
							className="textinput"
							rows="10"
							cols="100"
							ref={input => this.textInput = input}
						></textarea>
					</li>
					<div className="postcontain">
					</div>
				</ul>
			</form>
		)
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	newSubmission: function () {
		dispatch(toggleLogin(1))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
