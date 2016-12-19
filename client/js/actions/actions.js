const url = "http://localhost:8080/users";

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = user => ({
    type: GET_USER_SUCCESS,
   	user
});

export const getUser = () => (dispatch) => {
	return fetch(url)
			.then(res => {
				if(!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json()
			}).then(res => {
				dispatch(getUserSuccess());
			}).catch(err => {
				console.log('error:', err);
			})
		}
