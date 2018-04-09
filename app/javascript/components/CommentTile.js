import React from 'react';

const CommentTile = props => {
  return(
    <div>
      <div className='comments'>
        <div className='text-muted commentdate'>{props.date}</div>
        <h5 className="comment-creator">@{props.creator}:</h5>
        <p className="comment-body">{props.body}</p>
      </div>
    </div>
  )
}

  export default CommentTile;
