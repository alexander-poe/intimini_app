import React from 'react';

export default function DisplayEntries (props) {
	console.log(props);
		const authUser = props.user.id;
		const entriesArray = props.entries.filter((entry) => {
			return (entry.user_id === authUser);
		})

		const eachEntry = entriesArray.map((entry, idx) => {
			var mood = <p>{entry.mood}</p>
			var date = <p>{entry.date}</p>
			var content = <p>{entry.entry}</p>
			return (
				<div
					onClick={props.selectEntry.bind(null, entry.id)}
					className="journal-entry"
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

		return (
			<div>{eachEntry}</div>
		);
}
