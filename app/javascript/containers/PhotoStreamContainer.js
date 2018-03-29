import React, { Component } from 'react'
import PhotoTile from '../components/PhotoTile'

class PhotoStreamContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let showPhoto = this.props.photos.map(photo => {
      return (
          <PhotoTile
            img={photo.image_url}
            description={photo.description}
          />
      )
    })
    return (
      <div>{showPhoto}</div>
    )
  }
}

export default PhotoStreamContainer;
