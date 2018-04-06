import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PhotoStreamContainer from './PhotoStreamContainer';


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      selectedPhoto: null,
      selectedCategoryId: null,
      center: [-75.16416549682616, 39.95054298488249]
    }
    this.handlePhotoStreamClick = this.handlePhotoStreamClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closeMarkerWindow = this.closeMarkerWindow.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handlePhotoStreamClick(e){
   this.state.photos.map( photo => {
     if (photo.id == e.target.id)
     {this.setState({selectedPhoto: photo, center: photo.coordinates})}
  })
}

closeMarkerWindow(e){
  this.setState({selectedPhoto: null})
}

handleMarkerClick(e){
  let center = [e.feature.properties.lng, e.feature.properties.lat]
  this.state.photos.map( photo => {
    if (photo.id == e.feature.properties.photoId){
      this.setState({selectedPhoto: photo, center: center})
    }
  })
}

handleCategoryChange(e) {
  this.setState({selectedPhoto: null})
  if (e.target.id === this.state.selectedCategoryId) {
    this.setState({selectedCategoryId: null})
  } else {
    this.setState({selectedCategoryId: e.target.id})
  }
}

  componentDidMount() {
    fetch('/api/v1/photos')
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
      this.setState({photos: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return (
      <div>
        <div className='stream'>
          <PhotoStreamContainer
            photos={this.state.photos}
            handleClick={this.handlePhotoStreamClick}
          />
        </div>
        <div className='map' id='map'>
          <MapContainer
            selectedPhoto={this.state.selectedPhoto}
            photos={this.state.photos}
            handleClick={this.handleMarkerClick}
            closeMarker={this.closeMarkerWindow}
            handleCategoryChange={this.handleCategoryChange}
            center={this.state.center}
            selectedCategoryId={this.state.selectedCategoryId}
          />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
