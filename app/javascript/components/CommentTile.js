import React from 'react';

const CommentTile = props => {
  return(
    <div className="col media mb-4 comments">
      <div className="col media-body comments">
        <h5 className="my-0">{props.creator}</h5>
        <p className="my-0">{props.body}</p>
      </div>
    </div>
  )
}

  export default CommentTile;
