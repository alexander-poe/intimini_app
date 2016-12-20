import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ContentEditable from 'react-contenteditable';

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'the'
		}	
	}

	handleChange(e) {
		this.setState({
			text: event.target.value
		})
	}

	render() {
		
		return (
			<form className='form'>	
				<ContentEditable
					html={ this.state.text }
					disabled={ false }
					onChange={ this.handleChange.bind(this) }
				/>
				<input className="submit-button" type="submit" />
			</form>	
			)
	}
}

// const mapStateToProps = (state, props) => ({
// 	message: state.message
// })

export default Entry;