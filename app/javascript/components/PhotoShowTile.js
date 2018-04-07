import React from 'react';

const PhotoShowTile = props => {
  return(
        <div className="showtile">
          <img className='col showtile card-img-top' src={props.image}></img>
          <div className="card-body show">
            <p className='description'>{props.description}</p>
            <p className='cat'>Category: {props.category}</p>
          <p className='card-subtitle mb-2 text-muted'>Created at {props.date}</p>
        </div>
        </div>
  )
}

export default PhotoShowTile;
