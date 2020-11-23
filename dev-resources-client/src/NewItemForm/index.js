import React, { Component } from 'react';
import { Form, Button, Label, TextArea, Segment } from 'semantic-ui-react'

//*************************************************************************

export default class NewItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      link: '',
      description: '',
      media_link: ''
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

    this.props.createItem(this.state)

    this.setState({
      name: '',
      link: '',
      description: '',
      media_link: ''

    })
  }

//*************************************************************************

  render() {
    return (
      <Segment>
        <h2>Upload a Resource</h2>
        <Form onSubmit={this.handleSubmit}>

          <Label horizontal>Resource name:</Label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a resource"
            onChange={this.handleChange}
          />

          <Label horizontal>Link:</Label>
          <Form.Input
            type="text"
            name="link"
            value={this.state.link}
            placeholder="Enter a link"
            onChange={this.handleChange}
          />

          <Label horizontal>Description:</Label>
          <TextArea
            rows={3}
            name="description"
            value={this.state.description}
            placeholder='Enter Resource Description'
            onChange={this.handleChange}
          />

          <Label horizontal>YouTube Link (optional):</Label>
          <Form.Input
            type="text"
            name="youtube_link"
            value={this.state.media_link}
            placeholder="Enter an embedded link"
            onChange={this.handleChange}
          />

          <Button type="submit">Upload Resource</Button>
        </Form>
      </Segment>
    )
  }
}
