import React from 'react';
import { Link } from 'react-router';

const PhotoTile = props => {
  return(
    <div className="card">
      <a href='#map'>
        <img className='card-img-top' alt="Card image cap" src={props.img} onClick={props.handleClick} id={props.id}></img>
      </a>
        <div className="card-body">
        <p className="card-text">{props.description} </p>
      </div>
    </div>
  )
}

export default PhotoTile;
