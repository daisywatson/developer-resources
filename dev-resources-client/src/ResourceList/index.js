import React from 'react'
import Card from 'react-bootstrap/Cards'
import CardGroup from 'react-bootstrap/Cards'


export default function ResourceList(props) {

	const resources = props.resources.map(resource => {
		return (
			<Card.Img variant="top" src=''/>
				<Card.Body>
					<Card.Title>
					<a href={resource.name}></a>
					</Card.Title>

					<Card.Text>
					{resource.description}
					</Card.Text>

					<Button variant="primary" onClick={() => props.deleteResource(resource.id) }>
					</button>
					<Button variant="primary" onClick={() => props.editResource(resource.id) }>
					</button>
				</Card.Body>
			</Card>

			)
	})

	return (
		<div>
			<h4>My Resource List:</h4>
			<CardGroup centered={true}>
				{resources}
			</CardGroup>
		</div>

	)
}

