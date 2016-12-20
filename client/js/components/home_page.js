import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userslist: [
				{
					user: "hannah",
					id: 1,
					entries: [
						{
							date: 12182016,
							mood: "happy",
							content: "Today I'm happy!"
						}
					]
				},
				{
					user: "alex",
					id: 2,
					entries: [
						{
							date: 12182016,
							mood: "excited",
							content: "Today I'm excited!"
						},
						{
							date: 12182016,
							mood: "sad",
							content: "Today I'm sad."
						}
					]
				}
			]
		}
	}

	render() {
		return (
			<div>
				<EntriesHeader />
				<UserEntries date={this.state.date} mood={this.state.mood} content={this.state.content} />
			</div>
		)
	}

}

// const mapStateToProps = (state, props) => ({
// 	store: state
// })
//
// export default connect(mapStateToProps)(HomePage);
