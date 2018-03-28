import React, { Component } from 'react'
import PhotoTile from '../components/PhotoTile'

class PhotoStreamContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    photos: [
      {
        image_url: 'https://travel.usnews.com/static-travel/images/destinations/45/liberty_bell_-2015.jpg',
        description:'This place is great',
        coordinates: [-75.16416549682616,
          39.95054298488249],
          visible: true
        },
        {
          image_url: 'https://travel.usnews.com/static-travel/images/destinations/45/liberty_bell_-2015.jpg',
          description:'This place is great',
          coordinates: [-75.17416549682616,
            39.94054298488249],
            visible: true
        }
      ]
    }
  }

  render() {
    let showPhoto = this.state.photos.map(photo => {
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
