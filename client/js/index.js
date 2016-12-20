import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome_page';
import { Provider } from 'react-redux';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<WelcomePage />
		</Provider>,
		document.getElementById('root')
	);
});

//console.log(`Client running in ${process.env.NODE_ENV} mode`);
