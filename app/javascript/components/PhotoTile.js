import React from 'react';
import { Link } from 'react-router';

const PhotoTile = props => {
  return(
    <div className="carousel-inner">
       <div class="item active">
      <Link to={`/photos/${props.id}`}><img src={props.img} width='300px' height= '300px'></img> </Link>
      <p>{props.description} </p>
    </div>
  </div>
  )
}

export default PhotoTile;
