import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

//*************************************************************************

export default class LoginAndRegistrationForm extends Component {

	constructor() {

		super()


		this.state = {

			username: '',
			password: '',
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
	        <h2 className='loginHeader'>{this.state.action} Here</h2>

	        <Form onSubmit={this.handleSubmit}>


	        	<Form.Input
	             type="text"
	             name="username"
	             placeholder="Enter a username"
	             value={this.state.username}
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
	            	{ this.state.action === "Login" ? "Log in" : "Sign up" }
	          	</Button>
	        </Form>

	        {
	          this.state.action === "Login"
	          ?
						<p className='loginSubscript'>
	            Not a member? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
	          </p>
	          :
	          <p className='loginSubscript'>
	            Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
	          </p>

	        }
      </div>
    )
  }
}
