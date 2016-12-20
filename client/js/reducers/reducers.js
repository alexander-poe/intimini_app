import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

// const initial = {
// 	userslist: [],
// 	loading: false,
// 	error: null
// };

// const initial = {
// 	userslist: [
// 		{
// 			user: "mccain",
// 			id: 100,
// 			password: "nihil"
// 		},
// 		{
// 			user: "poe",
// 			id: 101,
// 			password: "actually"
// 		}
// 	],
// 	entrieslist: [
// 		{
// 			id: 200,
// 			user_id: 100,
// 			date: 12172016,
// 			mood: "ecstatic",
// 			content: "Actually meh distillery humblebrag you probably haven't heard of them, hella ad 8-bit typewriter subway tile copper mug odio meggings tempor chillwave."
// 		},
// 		{
//			visibility: true,
// 			id: 201,
// 			user_id: 101,
// 			date: 12182016,
// 			mood: "happy",
// 			content: "Nihil dolore laboris four dollar toast incididunt, keytar plaid hell of commodo readymade et shoreditch ad aesthetic."
// 		}
// 	]
// };

const usersReducer = (state = [], action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			return {
				...state,
				usersList: action.userInfo,
			};
		case actions.DELETE_USER_SUCCESS:
			return {
				...state,
				usersList: action.userInfo,
			};
		default:
			return state;
	}
}

const entriesReducer = (state = [], action) => {
	switch (action.type) {
		case actions.GET_ENTRIES_SUCCESS:
			return {
				...state,
				entriesList: action.entriesInfo
			};
		default:
			return state;
	}
}

export default combineReducers({
  usersReducer,
  entriesReducer
});
