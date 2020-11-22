import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

export default function HomeItems(props) {

  const itemsToDisplay = props.items.map(item => {
  let showRoute = "/app/v1/resources/"
      return(
        <Card key={item.id}>
          <Card.Content textAlign={'center'}>
            <Card.Header>
              <a href={item.link}>{item.name}</a>
            </Card.Header>
            <Card.Description>
              {item.description}
            </Card.Description>
            <Card.Content>
              {item.created_at}
            </Card.Content>
          </Card.Content>
        </Card>

      )
  })

    return(
      <Card.Group centered={true}>
        {itemsToDisplay}
      </Card.Group>
    )
  }
