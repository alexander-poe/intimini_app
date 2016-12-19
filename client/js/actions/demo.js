import 'babel-polyfill';
import 'isomorphic-fetch';
const url = "http://localhost:8080/users";


// const getUser = () => (dispatch) => {
 		fetch(url)
			.then(res => {
				if(!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			}).then(res => {
				console.log('success');
			}).catch(err => {
				console.log('error:', err);
			});
	