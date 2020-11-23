import React, { Component } from 'react'
import HomeContainer from '../HomeContainer'
import ItemContainer from '../ItemContainer'
import { Button } from 'semantic-ui-react'


export default class ResourcePagesContainer extends Component {
  constructor(props) {
    super(props)

      this.state = {
       showHome: false,
       toggleButtonText: 'View All Resources'
     }
    }

    setShowHome = () => {
      let toggle = false;
      let buttonText = 'View All Resources'
      if (this.state.showHome === false)
      {
        toggle = true;
        buttonText = 'View My Resources'
      }
      this.setState({
        showHome: toggle,
        toggleButtonText: buttonText
      })
    }

    render() {
      return (
        <div className="ResourcePagesContainer">
          <h1>Developer Resource Site</h1>
          <Button className='toggleBtn' primary onClick={() =>this.setShowHome()}> {this.state.toggleButtonText} </Button>
          {
            this.state.showHome
            ?

            <HomeContainer />

            :
            <ItemContainer />
          }
      </div>
     )
    }
}
