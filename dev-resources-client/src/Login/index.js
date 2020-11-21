import React, {Component} from 'react'
//import { Form, Button, Label, Segment} from ‘semantic-ui-react’

// export default class Login extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			username: '',
// 			password: ''
// 		}
// 	}
// 	handleChange = (event) => {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		})
// 	}
// 	handleSubmit = (event) => {
// 		event.preventDefault()
// 		this.loginUser(this.state)
// 	}
// }
// 	loginUser = async (user) => {
// 		try {
// 			const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
// 			const loginResponse = await fetch(url, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				credentials: 'include',
// 				body: JSON.stringify(user)
// 			})
// 			const loginResponseJson = await loginResponse.json()
// 			if(loginResponse.status === 201 || loginResponse.status === 200) {
// 				localStorage.setItem('login', true)
// 				this.props.history.push('/')
// 			}
// 		} catch(err) {
// 			console.log('Error logging in', err)
// 		}
// 	}
//
// 	render() {
// 		return (
// 			<div className="login">
// 				<h4>Sign into your account</h4>
// 				<form onSubmit={this.handleSubmit}>
//           <fieldset>
//           <label>Username:<label>
//   				<input
//   					type=‘text’
//   					name=‘username’
//   					value={this.state.username}
//   					placeholder=‘username’
//   					onChange={this.handleChange}
//   					/>
//           </fieldset>
//           <fieldset>
//             <label>Password<label>
//     				<input
//     					type=‘password’
//     					name=‘password’
//     					value={this.state.password}
//     					placeholder=‘password’
//     					onChange={this.handleChange}
//     					/>
//             </fieldset>
//           <button type=‘Submit’>Log In</button>
//         </form>
// 		</div>
// 		)
// 	}
// }
