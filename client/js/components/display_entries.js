import React from 'react';
import EntriesView from './entries_view';

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
			return (
				<EntriesView onClick={this.props.selectEntry.bind(null, entry.id)} mood={mood} />
			);
		});

		return (
			<div>{eachEntry}</div>
		);
	}

}

export default DisplayEntries;
