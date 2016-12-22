import React from 'react';

export default function DisplayOneEntry (props) {
	console.log(props);

	

	return (
		<div>{props.entries[0].entry}</div>
	)
}
