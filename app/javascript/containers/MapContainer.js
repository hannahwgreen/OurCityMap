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
      selectedPhoto: null,
      newPhotoCoordinates: [],
      center: [-75.16416549682616, 39.95054298488249],
      selectedCategoryId: null,
        }
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.onClickMap = this.onClickMap.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
      }

      handleMarkerClick(e){
        let center = [e.feature.properties.lng, e.feature.properties.lat]
        this.props.photos.map( photo => {
          if (photo.id == e.feature.properties.photoId){
            this.setState({selectedPhoto: photo, center: center})
          }
        })
      }

      onClickMap(map, evt) {
        let lng = evt.lngLat.lng
        let lat = evt.lngLat.lat
        this.setState({newPhotoCoordinates: [lng, lat]})
      }

      handleCategoryChange(id) {
        if (id === this.state.selectedCategoryId) {
          this.setState({selectedCategoryId: null})
        } else {
          this.setState({selectedCategoryId: id})
        }
      }

      render() {
        let markersArr = this.props.photos.map(photo => {
          if (this.state.selectedCategoryId){
            if (photo.category_id == this.state.selectedCategoryId) {
              let lng = Number(photo.coordinates[0])
              let lat = Number(photo.coordinates[1])
              let properties = {photoId: photo.id, lng: lng, lat: lat}
              return(
                <Feature
                  key={photo.id}
                  photoId={photo.id}
                  coordinates={photo.coordinates}
                  onClick={this.handleMarkerClick}
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
                onClick={this.handleMarkerClick}
                properties={properties}
                category={photo.category_id}
              />
              )
            }
          }).filter(x => x)

          let newPhotoPopup = this.state.newPhotoCoordinates.map(coordinates => {
            return(
              <Popup
                coordinates={this.state.newPhotoCoordinates}
                anchor="bottom">
                  <a href={`/photos/new?coordinates=${this.state.newPhotoCoordinates}`}> Add New Photo </a>
              </Popup>
            )
          })

          let photoPopups = this.props.photos.map(photo => {
            if (photo == this.state.selectedPhoto){
              return(
                <Popup
                  key={photo.id}
                  coordinates={photo.coordinates}
                  anchor="top">
                  <Link to={`/photos/${photo.id}`}><img className='card-img-top' alt="Card image cap" src={photo.image.url} width='180px' height= '180px' ></img></Link>

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
                    onCategoryChange={this.handleCategoryChange}
                  />
                </span>
                <span className='map'>
                  <Map
                  center={this.state.center}
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
                      layout={{ "icon-image": "star-15" }}>
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
