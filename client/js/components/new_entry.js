import React from 'react';

export default function NewEntry (props) {
	return (
		<div>
			<ul>
				<li>
					<textarea rows="10" cols="100" defaultValue="New entry..."/>
				</li>
				<button
					onClick={props.postNewEntry.bind(null, 'this is the text')}
					type="submit"
					className="submitButton">
					Record my thoughts
				</button>
			</ul>
		</div>
	)
}
