import * as actions from '../actions/actions'
const initialState = {
	message: 'hello from redux',
	user: [{username: 'alex'}]
};

const reducer = (state, action) => {
	if (action.type === actions.GET_USER_SUCCESS) {
		console.log('we made it')
		return { ...state, user: action.user }
	}	
		console.log('it didnt enter')
		return state = state || initialState;
	
}	

export default reducer;


