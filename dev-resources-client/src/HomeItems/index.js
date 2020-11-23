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

            {
              item.media_link !== ''

              ?

            <Card.Description>
              <iframe
  							width="250"
  							src={item.media_link}
  							frameborder="0"
  							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  							allowfullscreen>
  							</iframe>
  					</Card.Description>

              :

              ''

            }

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
