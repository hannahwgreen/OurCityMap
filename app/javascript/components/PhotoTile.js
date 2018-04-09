import React from 'react';
import { Link } from 'react-router';

const PhotoTile = props => {
  return(
    <span className='cardspan'>
      <div className="card" style={{width: 300, height: 350}}>
        <a href='#map'>
          <img className='card-img-top' alt="Card image cap" src={props.img} onClick={props.handleClick} id={props.id} style={{width: 290, height: 250}}></img>
        </a>
        <div className="card-body">
          <p className="card-text">{props.description} </p>
        </div>
      </div>
    </span>
  )
}

export default PhotoTile;
