import React from 'react';

class EntriesHeader extends React.Component {
	constructor(props) {
		super(props);
		this.changeFilter = this.changeFilter.bind(this);
	}

	changeFilter (e) {
		e.preventDefault();
		let filterVal = this.mood.value;
		console.log(filterVal)
	}

	render () {
		return (
			<div className="menu-bar">
				<form>
				
				</form>
				<hr />
				<form onSubmit={this.changeFilter}>
					<select>
						<option value="mood">Mood</option>
						<option value="happy" ref={input => this.mood = input}>
							Happy</option>
						<option value="sad" ref={input => this.mood = input}>
							Sad</option>
						<option value="bored" ref={input => this.mood = input}>
							Bored</option>
					</select>
					<button type="submit">Filter</button>
				</form>
				<hr />
			</div>
		)
	}
}

export default EntriesHeader;
