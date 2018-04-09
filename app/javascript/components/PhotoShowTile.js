import React from 'react';

const PhotoShowTile = props => {
  return(
    <div className='page'>
      <div className="showtile">
        <img className='showtileimg card-img-top' src={props.image}></img>
      </div>
      <div className="card-body">
        <p className='description'>{props.description}</p>
        <p className='poster'>Posted By: {props.creator}</p>
        <p className='cat'>Category: {props.category}</p>
        <p className='card-subtitle mb-2 text-muted date'>Created at {props.date}</p>
      </div>
    </div>
  )
}

export default PhotoShowTile;
