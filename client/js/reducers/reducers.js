import * as actions from '../actions/actions';
// import { combibneReducers } from 'redux';

/*
const initial = {
	userslist: [
		{
			user: "hannah"
			id,
			entries: {
				date,
				mood,
				content
			}
		}
		{
			user: "alex"
			id,
			entries: {
				date,
				mood,
				content
			}
		}
	]
};
*/

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
				loading: action.loading,
				error: action.error
			};
		case actions.DELETE_USER_SUCCESS:
			return {
				...state,
				userslist: action.userInfo,
				loading: action.loading,
				error: action.error
			};
		default:
			return state;
	}
}

export default reducer;
