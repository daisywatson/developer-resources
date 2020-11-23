import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'

export default function Header(props) {
	const headerStyle = {
		textAlign: 'right',
		fontSize: '14px',
		padding: '10px'
	}


	return (
		<div> 
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href=""><Icon className='globe'></Icon>DevRes</Navbar.Brand>

			  	<Navbar.Toggle aria-controls="basic-navbar-nav" />

			  	<Navbar.Collapse id="basic-navbar-nav">
			    	<Nav className="ml-auto">
			      		<Nav.Link href="">Home</Nav.Link>

			      		<Nav.Link eventKey="disabled" disabled>About</Nav.Link>
			      		<Nav.Link href="">Sign Up</Nav.Link>
			      		<Nav.Link href="">Log In</Nav.Link>
			      		<Nav.Link><span onClick={props.logout}>Logout</span></Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>


			<h4 className="text-center">Nice to see you again {props.username}!</h4>
</div>
	)
}
