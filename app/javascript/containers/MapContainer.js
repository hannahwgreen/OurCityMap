import React from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaGFubmFod2dyZWVuIiwiYSI6ImNqZmEyYm94bjI5a2Eyd3BkZjU4em1pZzYifQ.JGiB3u_tzlM4zQM-GJDsgA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null,
      // the photo that the user is hovering or clicking on
      nearbyPhotos: [],
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
      // the photos displayed in the photo stream
    }
  }
  // cDM(){
  //   fetch them photos
  // }
//
  // handleMarkerClick(e){
  //   e.target.value
  //   this.state.photos.each{
  //     if (photo.id == e.target.id){
  //       photo.visibility = true
  //     } else {
  //       photo.visibility = false
  //     }
  //   }
  // }

  render() {
    // map to photos to get marker info and map across to the feature changing coordinates.  add onclick
    let markersArr = this.state.photos.map(photo => {
      return(
        <Feature
          coordinates={photo.coordinates} />
      )
    })

    let popups = this.state.photos.map(photo => {
      if (photo.visible == true){
        return(
          <Popup
            coordinates={photo.coordinates}
            anchor="top">
            <img src={photo.image_url} width='150px' height= '150px'></img>
            </Popup>
          )
      }
    })

    return(
      <div>
        <Map
          center={[-75.16416549682616,
          39.95054298488249]}
          zoom={[10]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "500px",
            width: "800px"
          }}>
          {popups}
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "star-15" }}>
            {markersArr}
          </Layer>
        </Map>
      </div>
    )
  }
}
export default MapContainer;
