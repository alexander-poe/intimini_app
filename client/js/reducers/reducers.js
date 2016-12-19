const initialState = {
	message: 'hello from redux'
};

const reducer = (state, action) => {
	switch (actions.type) {
		case actions.getUserSuccess:
			return {...state, user: action.user}
		default:
			return state = state || initialState;
	}
}

export default reducer;
