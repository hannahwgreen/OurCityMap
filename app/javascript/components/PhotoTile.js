import React from 'react';
import { Link } from 'react-router';

const PhotoTile = props => {
  return(
    <div className="card">
        <Link to={`/photos/${props.id}`}><img className='card-img-top' alt="Card image cap" src={props.img} width='300px' height= '300px'></img> </Link>
        <div className="card-body">
        <p className="card-text">{props.description} </p>
      </div>
    </div>
  )
}

export default PhotoTile;
