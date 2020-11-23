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
