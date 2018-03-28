import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaGFubmFod2dyZWVuIiwiYSI6ImNqZmEyYm94bjI5a2Eyd3BkZjU4em1pZzYifQ.JGiB3u_tzlM4zQM-GJDsgA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceOfState: null,
      anotherPiece: []
    }
  }

  render() {
    return(
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
        </Map>
      </div>
    )
  }
}
export default MapContainer;
