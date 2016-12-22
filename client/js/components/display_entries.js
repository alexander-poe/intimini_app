import React from 'react';

class DisplayEntries extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		const authUser = this.props.user.id;
		let mood, date, content, classNames;
		const entriesArray = this.props.entries.filter((entry) => {
			return (entry.user_id === authUser);
		});
		const eachEntry = this.props.entries.map((entry, idx) => {
			mood = <p>{entry.mood}</p>
			date = <p>{entry.date}</p>
			content = <p>{entry.entry}</p>
			classNames = `${entry.mood} journal-entry`
			return (
				<div
					className={classNames}
					onClick={this.props.selectEntry.bind(null, entry.id)}
					key={idx}
					id={entry.id}
					>
					<ul>
						<li>{mood}</li>
						<li>{content}</li>
					</ul>
				</div>
			);
		});
console.info(eachEntry.length);
			return (
				<div>{eachEntry}</div>
			)
	}
}

export default DisplayEntries;
