import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome_page';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<WelcomePage />,
		document.getElementById('root')
	);
});

console.log(`Client running in ${process.env.NODE_ENV} mode`);
