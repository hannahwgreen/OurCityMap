import React, { Component } from 'react'
import PhotoTile from '../components/PhotoTile'
import { Link } from 'react-router';

class PhotoStreamContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    let showTiles = this.props.photos.map(photo => {
      return (
        <PhotoTile
          img={photo.image.url}
          description={photo.description}
          id={photo.id}
        />
      )
    })

    return (
      <div>{showTiles}</div>
    )
  }
}

export default PhotoStreamContainer;
