import React from 'react';

const PhotoShowTile = props => {
  return(
      <div className="jumbotron jumbotron-fluid" >
        <div className="container">
          <img src={props.image} width='300px' height= '300px'></img>
          <p className="lead photo-description">{props.description}</p>
          <p>{props.category}</p>
        </div>
      </div>
  )
}

export default PhotoShowTile;
