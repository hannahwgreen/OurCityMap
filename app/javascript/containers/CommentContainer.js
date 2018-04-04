import React, { Component } from 'react'
import CommentTile from '../components/CommentTile'
import CommentFormContainer from './CommentFormContainer'

class CommentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }

    this.addNewComment = this.addNewComment.bind(this);
    this.getCommentData = this.getCommentData.bind(this);
  }

  addNewComment(submission) {
    let id = this.props.id
    debugger
    fetch(`/api/v1/photos/${id}/comments`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
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
      debugger
      let updateComments = this.state.comments
      updateComments.unshift(body.comment)
      this.setState({
        comments: updateComments
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getCommentData() {
    let id = this.props.id
    fetch(`/api/v1/photos/${id}/comments`, {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
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
        comments: body.comments
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let comments = this.state.comments.map(comment => {
      return(
        <CommentTile
          key={comment.comment.id}
          id={comment.comment.id}
          date={comment.comment.updated_at}
          body={comment.comment.body}
          creator={comment.display_name}
        />
      )
    })

    return(
      <div className="container">
        <ul className="list-unstyled">
          {comments}
        </ul>
        <CommentFormContainer
          addNewComment={this.addNewComment}
          id={this.props.id} />
        </div>
      )
    }
  }

  export default CommentContainer;
