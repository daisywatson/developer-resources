import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

//*************************************************************************

export default class LoginAndRegistrationForm extends Component {

	constructor() {

		super()


		this.state = {
			email: '',
			password: '',
			username: '',
			action: 'Login' // will track whether we are logging in or registering
		}
	}

//*************************************************************************

	switchForm = () => {
		if (this.state.action === 'Login') {

			this.setState({ action: 'Register' })

		} else {

			this.setState({ action: 'Login' })
		}
	}

//*************************************************************************

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

//*************************************************************************

	handleSubmit = (event) => {

		event.preventDefault()

		console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)

		console.log(this.state)

		if(this.state.action === 'Register') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}

//*************************************************************************

	render() {
		return (
	      <div>
	        <h2>{this.state.action} here</h2>

	        <Form onSubmit={this.handleSubmit}>
	        {
	        	this.state.action === "Register"
	        	&&

	        	<Form.Input
	             type="text"
	             name="username"
	             placeholder="Enter a username"
	             value={this.state.username}
	             onChange={this.handleChange}
	           	/>

	        }
	          
	          	<Form.Input
	             type="email"
	             name="email"
	             placeholder="Enter an email"
	             value={this.state.email}
	             onChange={this.handleChange}
	            />
	          
	            <Form.Input
	             type="password"
	             name="password"
	             placeholder="Enter a password"
	             value={this.state.password}
	             onChange={this.handleChange}
	          	/>

	          	<Button type="Submit">
	            	{ this.state.action === "Login" ? "Log in" : "Sign up"}
	          	</Button>
	        </Form>
	        
	        {
	          this.state.action === "Login"
	          ?
	          <p>
	            Not a member? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
	          </p>
	          :
	          <p>
	            Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
	          </p>

	        }
      </div>
    )
  }
}
