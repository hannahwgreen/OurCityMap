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
      date: '',
      creator: ''
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
        date: body.date,
        creator: body.creator
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const { category, creator, date, photo, url } = this.state;
    return(
      <div className='photoshow'>
      <div className='row'>
        <PhotoShowTile
          key={photo.id}
          id={photo.id}
          image={url}
          description={photo.description}
          category={category}
          date={date}
          creator={creator}
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
