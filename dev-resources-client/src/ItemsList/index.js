import React from 'react'
import { Card, Button } from 'semantic-ui-react'


export default function ItemsList(props) {
	const items = props.items.map(item => {
		return (
			<Card key={item.id}>
				<Card.Content textAlign={'center'}>

					<Card.Header>
						{item.name}
					</Card.Header>

					<Card.Meta>
						{item.link}
					</Card.Meta>

					<Card.Description>
						{item.description}
					</Card.Description>

				</Card.Content>

				<Card.Content textAlign={'center'}>

					<Button basic color='red'
					onClick={() => props.deleteItem(item.id)}>
					Delete {item.name}
					</Button>

					<Button basic color='green'
					onClick={() => props.editItem(item.id)}>
					Edit {item.name}
					</Button>

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
