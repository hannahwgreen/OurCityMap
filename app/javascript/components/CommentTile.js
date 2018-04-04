import React from 'react';

const CommentTile = props => {
  return(
    <div className="media mb-4">
      <div className="media-body">
        <h5 className="my-0">{props.creator}</h5>
        <p className="my-0">{props.body}</p>
      </div>
    </div>
  )
}

  export default CommentTile;
