import React from 'react';
import PhotoStreamContainer from './PhotoStreamContainer';
import CategoriesContainer from './CategoriesContainer';
import Geocoder from '../components/Geocoder';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import { Link } from 'react-router';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaGFubmFod2dyZWVuIiwiYSI6ImNqZmEyYm94bjI5a2Eyd3BkZjU4em1pZzYifQ.JGiB3u_tzlM4zQM-GJDsgA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPhotoCoordinates: [],
    }
    this.onClickMap = this.onClickMap.bind(this);
    this.closeAddPhoto = this.closeAddPhoto.bind(this);
  }

  onClickMap(map, evt) {
    let lng = evt.lngLat.lng
    let lat = evt.lngLat.lat
    this.setState({newPhotoCoordinates: [lng, lat]})
  }

  closeAddPhoto(e){
    this.setState({newPhotoCoordinates: []})
  }

  render() {
    let markersArr = this.props.photos.map(photo => {
      if (this.props.selectedCategoryId){
        if (photo.category_id == this.props.selectedCategoryId) {
          let lng = Number(photo.coordinates[0])
          let lat = Number(photo.coordinates[1])
          let properties = {photoId: photo.id, lng: lng, lat: lat}
          return(
            <Feature
              key={photo.id}
              photoId={photo.id}
              coordinates={photo.coordinates}
              onClick={this.props.handleClick}
              properties={properties}
              category={photo.category_id}
            />
          )
        }
        else {
          return null
        }
      } else {
        let lng = Number(photo.coordinates[0])
        let lat = Number(photo.coordinates[1])
        let properties = {photoId: photo.id, lng: lng, lat: lat}
        return(
          <Feature
            key={photo.id}
            photoId={photo.id}
            coordinates={photo.coordinates}
            onClick={this.props.handleClick}
            properties={properties}
            category={photo.category_id}
          />
        )
      }
    }).filter(x => x)

    let newPhotoPopup;
    if (!this.props.selectedPhoto){
      newPhotoPopup = this.state.newPhotoCoordinates.map(coordinates => {
      return(
        <Popup
          coordinates={this.state.newPhotoCoordinates}
          anchor="bottom">
          <button type="submit" name="x" onClick={this.closeAddPhoto}>x</button>
          <a id='newphotolink' href={`/photos/new?coordinates=${this.state.newPhotoCoordinates}`}> Add New Photo </a>
        </Popup>
      )
    })
  }

    let photoPopups = this.props.photos.map(photo => {
      if (photo == this.props.selectedPhoto){
        return(
          <Popup
            coordinates={photo.coordinates}
            anchor="top">
            <div>
              <button type="submit" name="myButton" onClick={this.props.closeMarker}>x</button>
            </div>
            <Link to={`/photos/${photo.id}`}><img className='card-img-top' alt="Card image cap" src={photo.image.url} style={{width: 200, height: 200}}></img></Link>
          </Popup>
        )
      }
    })

    return(
      <div>
        <div>
          <span>
            <CategoriesContainer
              photos={this.props.photos}
              onCategoryChange={this.props.handleCategoryChange}
              selectedCategoryId={this.props.selectedCategoryId}
            />
          </span>
          <span className='map'>
            <Map
              center={this.props.center}
              onClick={this.onClickMap}
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: "500px",
                width: "1000px"
              }}>
              {photoPopups}
              {newPhotoPopup}
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "attraction-15", "icon-size": 1.5}}>
                {markersArr}
              </Layer>
              <Geocoder />
            </Map>
          </span>
        </div>
      </div>
    )
  }
}
export default MapContainer;
