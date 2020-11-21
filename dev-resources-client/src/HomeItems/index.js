import React, {Component} from 'react'
//import { Card, Button } from 'semantic-ui-react'

export default function HomeItems(props) {

const itemsToDisplay = props.items.map(item => {
    let showRoute = "/app/v1/resources/"
    return(
        <div key={item.id}>
          <p> Name: {item.name} </p>
          <a href={item.link}>{item.link}</a>
          <p> Description: {item.description}  </p>
          <a href={item.media_link}>{item.media_link}</a>
          <p> Created at: {item.created_at} </p>
        </div>
      )
  })

    return(
      <div>  {itemsToDisplay} </div>
    )

}
