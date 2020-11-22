import React from 'react'
import { Card, Button } from 'semantic-ui-react'


export default function ItemsList(props) {
	const items = props.items.map(item => {
		return (
			<Card key={item.id}>
				<Card.Content textAlign={'center'}>

					<Card.Header>
						<a href={item.link}>{item.name}</a>
					</Card.Header>

					<Card.Description>
						{item.description}
					</Card.Description>

					<Card.Description>
						<a href={item.media_link}>{item.media_link}</a>
					</Card.Description>

				</Card.Content>

				<Card.Content textAlign={'center'}>

					<Button primary onClick={() => props.editItem(item.id)}> Edit </Button>
					<Button primary onClick={() => props.deleteItem(item.id)}>
					Delete </Button>

				</Card.Content>
			</Card>
		)
	})


  return (
    <Card.Group centered={true}>
      {items}
    </Card.Group>
  )
}