import React, { Component } from 'react'
import PhotoShowTile from '../components/PhotoShowTile'

class PhotoShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: {},
      url: ""
    }
  }

  componentDidMount() {

    let id = this.props.params.id
    fetch(`/api/v1/photos/${id}`)
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
    .then(body => {
      this.setState({
        photo: body.photo,
        url: body.photo.image.url
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let photo_id = this.state.photo.id
    let photo_description = this.state.photo.description

    return(
      <div>
        <PhotoShowTile
          key={photo_id}
          id={photo_id}
          image={this.state.url}
          description={photo_description}
        />
      </div>
    )
  }
}

export default PhotoShowContainer;
