export default function Header(props) {
	const headerStyle = {
		textAlign: 'right',
		fontSize: '14px',
		padding: '10px'
	}


	return (

		<nav style={headerStyle}>
			<p>Logged in as {props.username}. |&nbsp;
				<span className='fake-link' onClick={props.logout}>Log out</span>
			</p>
		</nav>
	)
}
