import React from 'react';

const CommentTextArea = props => {
  return(
    <div className="form-group">
      <label>{props.label}</label>
      <textarea
        name={props.name}
        type='text'
        className='form-control'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </div>
  )
}

export default CommentTextArea;
