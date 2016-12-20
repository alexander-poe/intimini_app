import * as actions from '../actions/actions';

// const initial = {
// 	userslist: [
// 		{
// 			user: "hannah",
// 			id: 1,
// 			entries: {
// 				date,
// 				mood,
// 				content
// 			}
// 		},
// 		{
// 			user: "alex",
// 			id: 2,
// 			entries: {
// 				date,
// 				mood,
// 				content
// 			}
// 		}
// 	]
// };

const initial = {
	userslist: [],
	loading: false,
	error: null
};

const reducer = (state = initial, action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			return {
				...state,
				userslist: action.userInfo,
			};
		case actions.DELETE_USER_SUCCESS:
			return {
				...state,
				userslist: action.userInfo,
			};
		default:
			return state;
	}
}

export default reducer;
