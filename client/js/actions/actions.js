const users_url = "http://localhost:8080/users";
const entries_url = "http://localhost:8080/entries";

export const SHOW_NEW_ENTRY = 'SHOW_NEW_ENTRY';
export const showNewEntry = () => ({
	type: SHOW_NEW_ENTRY
});

// SYNC // USERS

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const toggleLogin = userId => ({
	type: TOGGLE_LOGIN,
	userId
});

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
  type: GET_USER_SUCCESS,
 	userInfo,
	loggedIn: false
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = userInfo => ({
  type: DELETE_USER_SUCCESS,
 	userInfo
});

// SYNC // ENTRIES

export const GET_ENTRIES_SUCCESS = 'GET_ENTRIES_SUCCESS';
export const getEntriesSuccess = entriesInfo => ({
	type: GET_ENTRIES_SUCCESS,
	entriesInfo
});

export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const deleteEntrySuccess = entryInfo => ({
	type: DELETE_ENTRY_SUCCESS,
	entryInfo
});

// ASYNC // ENTRIES

export const getEntries = (id = '') => dispatch => {
	return fetch(entries_url + '/' + id)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('actions', res);
			dispatch(getEntriesSuccess(res));
		}).catch(err => {
			console.log('error:', err);
		});
}

export const postNewEntry = (text) => dispatch => {
	console.log('actions.js arg', text);
	return fetch(entries_url,
		{
			method: "POST",
			body: JSON.stringify({
				mood: "happy",
				entry: text,
				user_id: 4
			}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res;
		}).then(res => {
			console.log('actions.js', res);
		}).catch(err => {
			console.log('error:', err);
		});
}

export const deleteEntry = (id) => dispatch => {
	return fetch(entries_url + '/' + id,
		{
			method: "DELETE",
			body: JSON.stringify({
				id: id
			}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			dispatch(deleteEntrySuccess(res));
		}).catch(err => {
			console.log('error:', err);
		})
}

export const updateEntry = (id, text) => dispatch => {
	console.log('actions.js arg', text);
	return fetch(entries_url,
		{
			method: "PUT",
			body: JSON.stringify({
				id: id,
				mood: "awkward",
				entry: text
			}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('updated entry');
		}).catch(err => {
			console.log('error:', err);
		})
}

// ASYNC // USERS

export const getUser = () => dispatch => {
	return fetch(users_url)
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
			console.log('success');
		}).catch(err => {
			console.log('error');
		})
}
