import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import PhotoTextField from '../components/PhotoTextField'

class PhotoFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      description: ''
    }
    this.readFiles = this.readFiles.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewPhoto(formPayload) {
    fetch('/api/v1/photos', {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
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
      this.readFiles()
      this.handleClear(event);
    }
  }

  readFile(files) {
    if (files && files[0]) {
      let formPayLoad = new FormData();
    formPayLoad.append('uploaded_image', files[0]);
    formPayload.append('description', this.state.description)
    this.addNewPhoto(formPayLoad)
  }
}


  render() {
    return(
      <div className="container mt-5">
        <h3>Add a Photo</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Dropzone onDrop={this.readFile}>
              <button>Upload a new image</button>
            </Dropzone>
          </div>
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
