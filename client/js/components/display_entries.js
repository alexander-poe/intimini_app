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
					className="journal-entry"
					key={idx}
					id={entry.id}
					>
					<ul>
						<li>{mood}</li>
						<li>{content}</li>
						<li>
							<button onClick="edit">Edit</button>
						</li>
						<li>
							<button onClick={console.log('Clicked delete')}>Delete</button>
						</li>
					</ul>
				</div>
			)
		})

		return (
			<div>{eachEntry}</div>
		)
}
