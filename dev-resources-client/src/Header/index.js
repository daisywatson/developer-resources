import React from 'react'

export default function Header(props) {
	const headerStyle = {
		textAlign: 'right',
		padding: '10px',
		backgroundColor: '#DDDDDD'
	}


	return (

		<nav style={headerStyle}>
			<p>Logged in as {props.email}.&nbsp;
				<span className='fake-link' onClick={props.logout}>(Log out)</span>
			</p>
		</nav>
	)
}