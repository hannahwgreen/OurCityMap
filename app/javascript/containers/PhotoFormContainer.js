import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import PhotoTextField from '../components/photoTextField'

class PhotoFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      description: ''
    }
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewPhoto(submission) {
    fetch('/api/v1/photos', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(submission),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => browserHistory.push(`/photos/${body.photo.id}`))
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleImageUrlChange(event) {
    this.setState({image_url: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  validateDescription(description) {
    if (description === '' || description === ' ') {
      let newError = { description: 'Description may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.description
      this.setState({ errors: errorState })
      return true
    }
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({image_url: '', description: ''})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validateImageUrl(this.state.image_url) &&
      this.validateDescription(this.state.description)
    )
    {
      let formPayload = {
        image_url: this.state.image_url,
        description: this.state.description
      }
      this.addNewPhoto(formPayload)
      this.handleClear(event);
    }
  }


  render() {
    return(
      <div className="container mt-5">
        <h3>Add a Photo</h3>
        <form onSubmit={this.handleSubmit}>
          <PhotoTextField
            content={this.state.description}
            label="Description:"
            name="name"
            handlerFunction={this.handleNameChange}
          />
        </form>
        </div>
        )
      }
    }

    export default PhotoFormContainer;
