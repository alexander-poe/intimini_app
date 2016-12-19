const url = "http://localhost:8080/users";



export const getUser = () => (dispatch) => {
	return fetch(url)
			.then(res => {
				if(!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json()
			}).then(res => {
				console.log('success');
			}).catch(err => {
				console.log('error:', err)
			})
		}
