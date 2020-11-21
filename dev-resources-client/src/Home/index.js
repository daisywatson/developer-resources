import React, { Component } from 'react'
import HomeItems from '../HomeItems'

export default class Home extends Component {
  constructor(props) {
    super(props)

      this.state = {
       items: []
     }
    }

    getItems = async () => {
    try {
      //load items from the item index route in our API
      //note: be sure to add a / to the end of this url
      //Flask/Flask-Cors expects this!!
    console.log("the env", process.env.REACT_APP_API_URL)
    const url = process.env.REACT_APP_API_URL + "/api/v1/resources/"
     console.log("about to fetch data from:")
     console.log(url)
    const itemsResponse = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
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
    //get items when this component is first rendered
    this.getItems()
  }

    render() {
      return (
        <HomeItems items={this.state.items} />
     )
    }
}
