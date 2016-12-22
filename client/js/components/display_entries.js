import React from 'react';

// HARD CODED:
// edited entry text

export default function DisplayEntries (props) {

		const authUser = props.user.id;
		let mood, date, content;

		const entriesArray = props.entries.filter((entry) => {
			return (entry.user_id === authUser);
		})
		const eachEntry = entriesArray.map((entry, idx) => {
			var mood = <p>{entry.mood}</p>
			var date = <p>{entry.date}</p>
			let content = <p>{entry.entry}</p>
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
			)
	}
