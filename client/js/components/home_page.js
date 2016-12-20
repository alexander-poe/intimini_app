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
						},
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
						},
						{
							date: 12172016,
							mood: "happy",
							content: "Kickstarter pariatur occupy jianbing. Enamel pin consectetur gentrify yr vexillologist, +1 bitters asymmetrical. Salvia kitsch small batch waistcoat fap dolor. Seitan pop-up elit everyday carry aliqua sed normcore, raw denim gastropub synth art party mustache street art cupidatat. Selvage tacos shoreditch whatever qui, schlitz officia laboris. Shoreditch distillery anim vape artisan raclette, jianbing asymmetrical organic tumeric hashtag yuccie. Vice selvage poke, chambray tumblr hammock exercitation pariatur vegan sustainable pickled pug kinfolk normcore."
						},
						{
							date: 12162016,
							mood: "sad",
							content: "Nulla man bun af hot chicken labore meditation, literally blog sriracha lomo sustainable sed nesciunt. Everyday carry aliquip veniam, listicle unicorn taxidermy meditation. Green juice lomo sartorial, eiusmod vegan sed hammock locavore selfies williamsburg. Pitchfork kogi fugiat, offal raclette edison bulb blog ramps placeat. Church-key minim vero thundercats pok pok. Direct trade semiotics proident magna small batch. YOLO quinoa retro, est pug non cardigan ennui proident flexitarian fashion axe vero truffaut chartreuse."
						},
						{
							date: 12162016,
							mood: "elated",
							content: "Yuccie excepteur gochujang, schlitz voluptate vinyl authentic four loko. Salvia irony kogi, lumbersexual nulla ex cornhole forage enamel pin craft beer neutra celiac sunt minim. Organic ullamco copper mug pinterest. Tacos heirloom occaecat, irure offal schlitz odio synth blue bottle vegan stumptown. Freegan church-key pork belly iPhone, gastropub celiac before they sold out listicle. Try-hard coloring book irure, raw denim kale chips marfa master cleanse ennui dolore wolf single-origin coffee PBR&B gochujang enamel pin. Air plant art party adipisicing pour-over."
						},
						{
							date: 12152016,
							mood: "depressed",
							content: "La croix iPhone cronut excepteur. Hammock aliquip assumenda, occupy accusamus retro truffaut nesciunt proident cardigan fingerstache. Crucifix deep v microdosing, art party sed reprehenderit schlitz organic affogato marfa cornhole four dollar toast. Ethical vice trust fund magna. Freegan post-ironic cardigan blue bottle. Viral godard eu woke veniam, tofu williamsburg small batch scenester anim pok pok. Sartorial nesciunt gochujang, vice yuccie meh gastropub beard butcher."
						},
						{
							date: 12142016,
							mood: "bored",
							content: "Pabst iceland pop-up fap. Enamel pin raclette unicorn, kogi austin ennui yuccie prism PBR&B non laboris synth. Cupidatat accusamus anim DIY, retro intelligentsia voluptate ea succulents in. Kitsch deserunt consectetur, ea tumeric vaporware +1 celiac duis man braid labore. Sed odio wayfarers nostrud typewriter, readymade chambray beard sustainable. Dolore small batch scenester, sint waistcoat dolor flannel nisi tilde keytar copper mug fixie artisan. Whatever cred vexillologist, tumeric meh lo-fi green juice pabst nisi."
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
