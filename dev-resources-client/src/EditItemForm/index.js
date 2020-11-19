import React, { Component } from 'react'


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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //variable updateItem needs to to match what RN creates in main container
  handleSubmit = (event) => {
    event.preventDefault()
      this.props.updateItem(this.state)
  }

  render() {
    return (
      <div className='editItemForm'>
        <h2>Edit Resource</h2>
        <form>
          <fieldset>
            <label>Resource name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter a resource"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <label>Link:</label>
            <input
              type="text"
              name="Link"
              value={this.state.link}
              placeholder="Enter a link"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <label>Description:</label>
            <textarea rows="3"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}>Enter a description
            </textarea>
          </fieldset>
          <fieldset>
            <label>Image/video link (optional):</label>
            <input
              type="text"
              name="media_link"
              value={this.state.link}
              placeholder="Enter a media link"
              onChange={this.handleChange}
            />
          </fieldset>
          <button type="submit">Edit Resource</button>
        </form>
      </div>
    )
  }
}
