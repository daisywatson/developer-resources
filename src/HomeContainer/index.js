import React, { Component } from 'react'
import HomeItems from '../HomeItems'
import ItemContainer from '../ItemContainer'
import { Button } from 'semantic-ui-react'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

      this.state = {
       items: [],
       action: ''
     }
    }

    setActionState = (action) => {
      this.setState({
        action: action
      })
    }

    getItems = async () => {
    try {

    console.log("the env", process.env.REACT_APP_API_URL)
    const url = process.env.REACT_APP_API_URL + "/api/v1/resources/"
     console.log("about to fetch data from:")
     console.log(url)
    const itemsResponse = await fetch(url, {
        // method: 'GET',
        // mode: "no-cors",
        credentials: 'include',
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      })
     console.log(itemsResponse)
     const itemsJson = await itemsResponse.json()
     console.log(itemsJson)

    if(itemsResponse.status == 200 || itemsResponse.status == 201 ) {
     this.setState({
       items: itemsJson.data
      })
    }
    } catch(err) {
      console.log("Error getting items data.", err);
    }
  }

    componentDidMount() {
      this.getItems()
  }

    render() {
      return (
        <div className="HomeContainer">
          <h3>All Resources List:</h3>
          <HomeItems items={this.state.items} />
      </div>
     )
    }
}
