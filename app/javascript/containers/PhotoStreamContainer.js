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
    let description;
    let showTiles = this.props.photos.map(photo => {
    if (photo.description.length > 100)
     {
       description = `${photo.description.substring(0,100)}...`
     } else {
       description = photo.description
     }
      return (
        <PhotoTile
          img={photo.image.url}
          description={description}
          id={photo.id}
          handleClick={this.props.handleClick}
          date={photo.created_at}
        />
      )
    })

    return (
      <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example card-deck">
        <div className="list-group row" id="list-example">
          {showTiles}
        </div>
      </div>
  )
  }
}

export default PhotoStreamContainer;
