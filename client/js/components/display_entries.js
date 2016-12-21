import React from 'react';

export default function DisplayEntries (props) {
		console.log(props.entries);

		const eachEntry = props.entries.map((entry, idx) => {
			var mood = <p>{entry.mood}</p>
			var date = <p>{entry.date}</p>
			var content = <p>{entry.entry}</p>
			return (
				<div className="entry" key={idx}>
					<ul>
						<li>{mood}</li>
						<li>{date}</li>
						<li>{content}</li>
					</ul>
				</div>
			)
		})

		return (
			<div>{eachEntry}</div>
		)
}
