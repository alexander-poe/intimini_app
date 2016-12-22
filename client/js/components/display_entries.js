import React from 'react';

// HARD CODED:
// edited entry text

export default function DisplayEntries (props) {
	console.log(props);
	const authUser = props.user.id;
	let editButtons;

	const entriesArray = props.entries.filter((entry) => {
		return (entry.user_id === authUser);
	})
	const eachEntry = entriesArray.map((entry, idx) => {
		var editButtons;
		var mood = <p>{entry.mood}</p>
		var date = <p>{entry.date}</p>
		let content = <p>{entry.entry}</p>
		if (entriesArray.length === 1) {
			content = <p contentEditable={true}>{entry.entry}</p>
			editButtons = (
				<div>
					<button
						onClick={props.updateEntry.bind(null, entry.id, "i'm edited wheeeeeee!")}
						className="save-button">
							Save edits
					</button>
					<button
						onClick={props.deleteEntry.bind(null, entry.id)}
						className="delete-button">
							Delete
					</button>
				</div>
			)
		} else {
			editButtons = ''
		}
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
					<li>{editButtons}</li>
				</ul>
			</div>
		);
	});

	if (entriesArray.length === 1) {
		editButtons = (
			<div>
				<button className="edit-button">Edit</button>
				<button className="delete-button">Delete</button>
			</div>
		)
	} else {
		editButtons = ''
	}

	return (
		<div>{eachEntry}</div>
	);

}
