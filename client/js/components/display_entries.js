import React from 'react';

export default function DisplayEntries (props) {
		const authUser = props.user.id;
		const entriesArray = props.entries.filter((entry) => {
			return (entry.user_id === authUser);
		})

		console.log(authUser);
		console.log(entriesArray);

		const eachEntry = entriesArray.map((entry, idx) => {
			var mood = <p>{entry.mood}</p>
			var date = <p>{entry.date}</p>
			var content = <p>{entry.entry}</p>
			return (
				<div className="entry" key={idx}>
					<ul>
						<li>{mood}</li>
						<li>{date}</li>
						<li>{content}</li>
						<li>
							<button onClick="edit">Edit</button>
						</li>
						<li>
							<button onClick="delete">Delete</button>
						</li>
					</ul>
				</div>
			)
		})

		return (
			<div>{eachEntry}</div>
		)
}
