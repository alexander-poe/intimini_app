import React from 'react';

class EntriesHeader extends React.Component {
	constructor(props) {
		super(props);
		this.changeFilter = this.changeFilter.bind(this);
	}

	changeFilter (e) {
		e.preventDefault();
		let filterVal = this.mood.value;
		console.log(filterVal)//props action dispatch action that does server by mood. something select moods, if mood === entry mood then map. 
	}

	render () {
		return (
			<div className="menu-bar">
				<form>
				
				</form>
				<hr />
				<form onSubmit={this.changeFilter}>
					<select className="pure-button dropsize">
						<option value="mood">Mood</option>
						<option value="happy" ref={input => this.mood = input}>
							Happy</option>
						<option value="sad" ref={input => this.mood = input}>
							Sad</option>
						<option value="bored" ref={input => this.mood = input}>
							Bored</option>
					</select>
					<button className="pure-button" type="submit">Filter</button>
				</form>
				<hr />
			</div>
		)
	}
}

export default EntriesHeader;
