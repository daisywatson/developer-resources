import React, { Component } from 'react';

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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


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


  render() {
    return (
      <div className='newItemForm'>
        <h2>Upload a Resource</h2>
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
              name="link"
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
          <button type="submit">Upload Resource</button>
        </form>
      </div>
    )
  }
}
