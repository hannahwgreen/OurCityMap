import React, { Component } from 'react'
import CommentTextArea from '../components/CommentTextArea'

class CommentFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      errors: {}
    }
    this.handleBodyChange = this.handleBodyChange.bind(this);
    // this.validateBody = this.validateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

  // validateBody(body) {
  //   if (body === '' || body === ' ') {
  //     let newError = { body: 'Review may not be blank.' }
  //     this.setState({ errors: Object.assign(this.state.errors, newError) })
  //     return false
  //   } else {
  //     let errorState = this.state.errors
  //     delete errorState.body
  //     this.setState({ errors: errorState })
  //     return true
  //   }
  // }

  handleClear(event) {
    event.preventDefault();
    this.setState({body: ''})
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body: this.state.body,
    }
    this.props.addNewComment(formPayload)
    this.handleClear(event);
  }


  render() {
    return (
      <div className='col commentsformrow'>
      <form className="new-comment-form callout mb-5 commentform" onSubmit={this.handleSubmit}>
        <h3>Add Comment for this photo</h3>
        <CommentTextArea
          content={this.state.body}
          label="Comment"
          name="comment"
          handlerFunction={this.handleBodyChange}
        />
        <div className="button-group">
          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}

export default CommentFormContainer;
