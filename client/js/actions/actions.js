const url = "http://localhost:8080/users";

// SYNC

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
    type: GET_USER_SUCCESS,
   	userInfo
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = userInfo => ({
    type: DELETE_USER_SUCCESS,
   	userInfo
});

// ASYNC

export const getUser = () => dispatch => {
	return fetch(url)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			dispatch(getUserSuccess(res));
		}).catch(err => {
			console.log('error:', err);
		})
}

export const deleteUser = () => dispatch => {
	dispatch(dbRequest());
	return fetch(url,
		{
			method: "DELETE",
			body: JSON.stringify({id: 2}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
		}).then(res => {
			dispatch(deleteUserSuccess());
		}).catch(err => {
			console.log('error:', err);
		})
}
