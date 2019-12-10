import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PhotoStreamContainer from './PhotoStreamContainer';

const CENTRAL_PHILADELPHIA_COORDINATES = [-75.16416549682616, 39.95054298488249]

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      selectedPhoto: null,
      selectedCategoryId: null,
      center: CENTRAL_PHILADELPHIA_COORDINATES
    }
    this.handlePhotoStreamClick = this.handlePhotoStreamClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closeMarkerWindow = this.closeMarkerWindow.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handlePhotoStreamClick(e){
    let selectedCategoryId = this.state.selectedCategoryId
    this.state.photos.map( photo => {
      if (photo.id == e.target.id){
        this.setState({selectedPhoto: photo, center: photo.coordinates})
        if (photo.category_id != selectedCategoryId) {
          this.setState({selectedCategoryId: null})
      }}
    })
  }

closeMarkerWindow(e){
  this.setState({selectedPhoto: null})
}

handleMarkerClick(e){
  const { lng, lat, photoId } = e.feature.properties
  let center = [ lng, lat ]
  this.state.photos.map( photo => {
    if (photo.id == photoId){
      this.setState({selectedPhoto: photo, center })
    }
  })
}

handleCategoryChange(e) {
  this.setState({ selectedPhoto: null })
  if (e.target.id === this.state.selectedCategoryId) {
    this.setState({ selectedCategoryId: null })
  } else {
    this.setState({ selectedCategoryId: e.target.id })
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

    const { center, photos, selectedCategoryId, selectedPhoto } = this.state

    return (
      <div>
        <div className='stream'>
          <PhotoStreamContainer
            photos={photos}
            handleClick={this.handlePhotoStreamClick}
          />
        </div>
        <div className='map' id='map'>
          <MapContainer
            selectedPhoto={selectedPhoto}
            photos={photos}
            handleClick={this.handleMarkerClick}
            closeMarker={this.closeMarkerWindow}
            handleCategoryChange={this.handleCategoryChange}
            center={center}
            selectedCategoryId={selectedCategoryId}
          />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
