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
      <div id="myCarousel" className="carousel slide" data-ride="carousel">{showTiles}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
        </a>
    </div>
    )
  }
}

export default PhotoStreamContainer;
