import React, { Component } from 'react'
import PhotoShowTile from '../components/PhotoShowTile'
import CommentContainer from './CommentContainer'
class PhotoShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: {},
      url: '',
      category: '',
      date: ''
    }
  }

  componentDidMount() {
    let id = this.props.params.id
    fetch(`/api/v1/photos/${id}`)
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
      this.setState({
        photo: body.photo,
        url: body.photo.image.url,
        category: body.category,
        date: body.date
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let photo_id = this.state.photo.id
    let photo_description = this.state.photo.description

    return(
      <div className='photoshow'>
      <div className='row'>
        <PhotoShowTile
          key={photo_id}
          id={photo_id}
          image={this.state.url}
          description={photo_description}
          category={this.state.category}
          date={this.state.date}
        />
      </div>

      <div className='commentcontainer row'>
        <CommentContainer
          id={this.props.params.id}
        />
      </div>
    </div>
    )
  }
}

export default PhotoShowContainer;
