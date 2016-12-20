import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import WelcomePage from './components/welcome_page';
import HomePage from './components/home_page';
import IntiminiContainer from './components/intimini_home';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<WelcomePage />
		</Provider>,
		document.getElementById('root')
	);
});

// document.addEventListener('DOMContentLoaded', () => {
// 	return ReactDOM.render(
// 		<HomePage />,
// 		document.getElementById('root')
// 	);
// });

console.log(`Client running in ${process.env.NODE_ENV} mode`);
