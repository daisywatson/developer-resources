import React, { Component } from 'react'
import './App.css'
import ItemContainer from './ItemContainer'
import LoginAndRegistration from './LoginAndRegistration'
import Header from './Header'

//*************************************************************************

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUserEmail: '' 
    }
  }

//*************************************************************************

  register = async (registerInfo) => {

    console.log('register() in App.js called with the following info', registerInfo)

    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'

    try {
      const registerResponse = await fetch (url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('registerResponse', registerResponse)

      const registerJson = await registerResponse.json()

      console.log('registerJson', registerJson)

      if(registerResponse.status === 201) {

      this.setState({

        loggedIn: true,
        loggedInUserEmail: registerJson.data.email

      })
     }
    } catch(err) {

      console.log('There was an error attempting to register. Please try again.')

      console.log(err)
    }
  }

//*************************************************************************

  login = async (loginInfo) => {

    console.log("login() in App.js called with the following info", loginInfo);

    const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

    try {

      const loginResponse = await fetch(url, {
        credentials: 'include', // sends cookie
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log("loginResponse", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("loginJson", loginJson);

      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUserEmail: loginJson.data.email
        })
      }
    } catch(error) {

    console.error("There was an error attempting to log in. Please try again.")

    console.error(error)

   }
  }

//*************************************************************************

  logout = async () => {
    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"

      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })

      console.log("logoutResponse", logoutResponse);
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson", logoutJson);

      if(logoutResponse.status === 200) {

        this.setState({

          loggedIn: false,
          loggedInUserEmail: ''

        })

      }

    } catch(error) {

      console.error("There was an error logging out. Please try again.")

      console.error(error)

    }
  }

//*************************************************************************

  render() {

    return (

      <div className="App">
        {

          this.state.loggedIn

          ?

          <React.Fragment>

            <Header email={this.state.loggedInUserEmail} logout={this.logout} />

            <ItemContainer />

          </React.Fragment>

          :

          <LoginAndRegistration 

            login={this.login}

            register={this.register}

          /> 
        }
      </div>
    )
  }
}