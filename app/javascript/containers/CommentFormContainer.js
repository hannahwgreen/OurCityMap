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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

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
      <div className='comment-form'>
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
