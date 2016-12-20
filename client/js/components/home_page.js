import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import EntriesHeader from './entries_header';
import UserEntries from './user_entries';


export default class HomePage extends React.Component {
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
							content: "Nihil dolore laboris four dollar toast incididunt, keytar plaid hell of commodo readymade et shoreditch ad aesthetic. Fingerstache in mumblecore, microdosing authentic blue bottle aliqua chicharrones franzen drinking vinegar tofu tote bag single-origin coffee VHS exercitation. Art party tofu do cupidatat est narwhal, hella pabst cornhole authentic vinyl migas nihil banjo. Ullamco pork belly proident deserunt vexillologist. Etsy tote bag health goth vegan, sustainable kogi dolor pitchfork. Aliquip freegan paleo, tilde gentrify elit readymade kale chips green juice duis bicycle rights YOLO ethical. Jean shorts sustainable synth waistcoat pok pok everyday carry, tbh listicle pariatur tumeric tattooed portland odio microdosing disrupt."
						},
						{
							date: 12182016,
							mood: "sad",
							content: "Actually meh distillery humblebrag you probably haven't heard of them, hella ad 8-bit typewriter subway tile copper mug odio meggings tempor chillwave. Anim 90's food truck slow-carb cronut. Polaroid authentic franzen, in meggings fam biodiesel letterpress placeat woke quis food truck health goth. Do banjo copper mug, mlkshk flexitarian subway tile kombucha DIY ex. Direct trade neutra twee vegan air plant tattooed knausgaard plaid, brunch sriracha selfies 3 wolf moon id stumptown. Roof party gentrify bushwick laboris, fugiat meditation fap marfa you probably haven't heard of them sriracha man braid. Brooklyn lomo chillwave kinfolk, umami neutra narwhal mumblecore kombucha cupidatat wolf godard."
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
				<UserEntries entries={this.state.userslist[1].entries}/>
			</div>
		)
	}

}

// const mapStateToProps = (state, props) => ({
// 	store: state
// })
//
// export default connect(mapStateToProps)(HomePage);
