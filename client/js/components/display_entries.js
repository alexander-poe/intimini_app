import React from 'react';

const entriesArray = [{
"mood": "boredd",
"entry": "futbol",
"user_id": 3
},{
"mood": "bored",
"entry": "futbol",
"user_id": 3
},{
"mood": "happy",
"entry": "futbol",
"user_id": 3
},{
"mood": "sad",
"entry": "futbol",
"user_id": 3
}]

export default function DisplayEntries (props) {
	const authUser = props.user.id;
	let editButtons;
	const entriesArray = props.entries.filter((entry) => {
		return (entry.user_id === authUser);
	})
	const eachEntry = entriesArray.map((entry, idx) => {
		var mood = <p>{entry.mood}</p>
		var date = <p>{entry.date}</p>
		var content = <p>{entry.entry}</p>
		const moods = [{
			mood: 'sad', 
			color: '#E35A2D', 
		}, {
			mood: 'bored', 
			color: '#5BE32D'
		}, {
			mood: 'happy', 
			color: '#B52DE3' 
		}]
		moods.forEach(function (mood) {
				let x = mood.mood;
				let c = mood.color;
				if(mood === x) {
				return (
					<div
						onClick={props.selectEntry.bind(null, entry.id)}
						className="journal-entry"
						key={idx}
						id={entry.id}
						>
						<ul>
							<div className={x}>
								<li>{mood}</li>
								<li>{content}</li>
							</div>
						</ul>
					</div>
				);
			}
		});
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
