import React, {Component} from ‘react’
//import { Form, Button, Label, Segment} from ‘semantic-ui-react’


export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: ‘’,
			password: ‘’
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.registerUser(this.state)
	}
}
	registerUser = async (user) => {
		try {
			const url = process.env.REACT_APP_API_URL + ‘/api/v1/users/login’
			const registerResponse = await fetch(url, {
				method: ‘POST’,
				headers: {
					‘Content-Type’: ‘application/json’,
				},
				credentials: ‘include’,
				body: JSON.stringify(user)
			})
			const registerResponseJson = await registerResponse.json()
			if(registerResponse.status === 201 || registerResponse.status === 200) {
				localStorage.setItem(‘register’, true)
				this.props.history.push(‘/’)
			}
		} catch(err) {
			console.log(‘Error registering user’, err)
		}
	}
	render() {
		return (
			<div className="register">
    		<h4>Sign up today</h4>
				<form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Username:</label>
    				<input
    					type='text'
    					name='username'
    					value={this.state.username}
    					placeholder='username’
    					onChange={this.handleChange}
    					/>
          </fieldset>
          <fieldset>
    				<label>Password</label>
    				<input
    					type='password’
    					name='password’
    					value={this.state.password}
    					placeholder='password’
    					onChange={this.handleChange}
    					/>
          </fieldset>
				<button type=‘Submit’>Sign up</button>
			</form>
		</div>
		)
	}
}
