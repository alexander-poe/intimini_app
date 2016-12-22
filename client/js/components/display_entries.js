import React from 'react';

// HARD CODED:
// edited entry text

class DisplayEntries extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		const authUser = this.props.user.id;
		let editButtons;

		const entriesArray = this.props.entries.filter((entry) => {
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
							onClick={this.props.updateEntry.bind(null, entry.id, "i'm edited wheeeeeee!")}
							className="save-button">
								Save edits
						</button>
						<button
							onClick={this.props.deleteEntry.bind(null, entry.id)}
							className="delete-button">
								Delete
						</button>
					</div>
				)
			} else {
				editButtons = ''
			}
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
									onClick={this.props.selectEntry.bind(null, entry.id)}
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
					onClick={this.props.selectEntry.bind(null, entry.id)}
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

}

export default DisplayEntries;
