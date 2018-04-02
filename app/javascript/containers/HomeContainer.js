import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PhotoStreamContainer from './PhotoStreamContainer';


class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/photos').then(response => {
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
        <div>
          <MapContainer
            photos={this.state.photos}
          />
        </div>
        <div>
          <PhotoStreamContainer
            photos={this.state.photos}
          />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
