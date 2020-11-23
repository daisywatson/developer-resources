import React, { Component } from 'react'
import { Form, Button, Label, Segment,TextArea, Header } from 'semantic-ui-react'

//*************************************************************************
//variable itemToEdit needs to to match what RN creates in main container

export default class EditItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {

      name: props.itemToEdit.name,
      link: props.itemToEdit.link,
      description: props.itemToEdit.description,
      media_link: props.itemToEdit.media_link

    }
  }
//*************************************************************************

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//*************************************************************************

  handleSubmit = (event) => {
    event.preventDefault()
      this.props.updateItem(this.state)
  }

//*************************************************************************

  render() {
    return (
      <Segment>
        <h2>Edit Resource</h2>
        <Form onSubmit={this.handleSubmit}>

          <label>Resource name:</label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a resource"
            onChange={this.handleChange}
          />

          <label>Link:</label>
          <Form.Input
            type="text"
            name="link"
            value={this.state.link}
            placeholder="Enter a link"
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <TextArea
            rows="3"
            name="description"
            value={this.state.description}
            placeholder="Enter Resource Description"
            onChange={this.handleChange}
          />


          <label>YouTube Link (optional):</label>
          <Form.Input
            type="text"
            name="media_link"
            value={this.state.link}
            placeholder="Enter an embedded link"
            onChange={this.handleChange}
          />

          <Button type="submit">Edit Resource</Button>
        </Form>
      </Segment>
    )
  }
}
