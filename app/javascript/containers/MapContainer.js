import React from 'react';
import PhotoStreamContainer from './PhotoStreamContainer';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaGFubmFod2dyZWVuIiwiYSI6ImNqZmEyYm94bjI5a2Eyd3BkZjU4em1pZzYifQ.JGiB3u_tzlM4zQM-GJDsgA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null,
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

        let markersArr = this.props.photos.map(photo => {
          return(
            <Feature
              coordinates={photo.coordinates} />
            )
          })
    
          let popups = this.props.photos.map(photo => {
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
