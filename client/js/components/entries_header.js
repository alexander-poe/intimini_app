import React from 'react';

export default function EntriesHeader(props) {
	const changeFilter = (event) => {
		let filterVal = this.selection.value;
	}

	return (
		<div className="menu-bar">
			<form>
				<button className="back-to-top">Back to top</button>
			</form>
			<hr />
			<form>
				<select>
					<option value="mood">Mood</option>
					<option value="happy">Happy</option>
					<option value="sad">Sad</option>
					<option value="bored">Bored</option>
				</select>
				<button onClick={changeFilter}>Filter</button>
			</form>
			<hr />
			<form>
				<input type="text" placeholder="Search past entries" />
				<button>Search</button>
			</form>
			<hr />
		</div>
	)
}
