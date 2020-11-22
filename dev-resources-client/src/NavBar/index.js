import React, { Component } from 'react'
import './App.css'
import HomeContainer from '../HomeContainer'
import LoginAndRegistration from '../LoginAndRegistration'
import { Button } from 'semantic-ui-react'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

      this.state = {
       showHome: true
     }
    }

    setShowHome = () => {
      this.setState({
        showHome: true
      })
    }

    setShowLogin = () => {
      this.setState({
        showHome: false
      })
    }

    render() {
      return (
        <div className="ResourcePagesContainer">
          <Button primary onClick={() =>this.setShowHome()}> Home </Button>
          <Button primary onClick={() =>this.setShowLogin()}> Login </Button>
          <h1>Developer Resource Site</h1>
          {
            this.state.showHome
            ?

            <HomeContainer />

            :

            <LoginAndRegistration
              login={this.props.login}
              register={this.props.register} />
          }
      </div>
     )
    }
}
