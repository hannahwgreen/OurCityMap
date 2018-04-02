import React, { Component } from 'react'
import {browserHistory} from 'react-router';
import PhotoTextField from '../components/PhotoTextField'
import Uploader from '../components/Uploader'

class PhotoFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      files: ''
    }
    this.handleUploader = this.handleUploader.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    // this.validateDescription = this.validateDescription.bind(this);
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

  handleUploader(file) {
    this.setState({files: file})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  // validateDescription(description) {
  //   if (description === '' || description === ' ') {
  //     let newError = { description: 'Description may not be blank.' }
  //     this.setState({ errors: Object.assign(this.state.errors, newError) })
  //     return false
  //   } else {
  //     let errorState = this.state.errors
  //     delete errorState.description
  //     this.setState({ errors: errorState })
  //     return true
  //   }
  // }

  handleClear(event) {
    event.preventDefault();
    this.setState({image_url: '', description: ''})
  }

  handleSubmit(event) {
    event.preventDefault();
    // if (
    //   this.validateDescription(this.state.description)
    // )
    // {
    let formPayload = {
      "photo": {
        "description": this.state.description,
        "files": {"name": this.state.files.name, "type": this.state.files.type, "size": this.state.files.size, "updated_at": this.state.files.lastModified, "coordinates": this.props.location.state.detail
        }
      }
    }
      this.addNewPhoto(formPayload)
      this.handleClear(event);
    // }
  }


  render() {
debugger
    return(
      <div className="container mt-5">
        <h3>Add a Photo</h3>
        <form onSubmit={this.handleSubmit}>
          <Uploader
            handler={this.handleUploader}/>
          <PhotoTextField
            content={this.state.description}
            label="Description:"
            name="description"
            handlerFunction={this.handleDescriptionChange}
          />
          <input
            type="hidden"
            value={this.props.location.state.detail}
            name="coordinates"
          />
          <button className="btn btn-primary" onClick={this.handleSubmit} type="submit" value="Submit">Submit</button>
        </form>
        </div>
        )
      }
    }

    export default PhotoFormContainer;
