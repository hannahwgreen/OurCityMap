import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PhotoStreamContainer from './PhotoStreamContainer';


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
    <div>
      <div>
      <MapContainer
      />
    </div>
  <div>
      <PhotoStreamContainer
      />
    </div>
  </div>
    )
  }
}

export default HomeContainer;
