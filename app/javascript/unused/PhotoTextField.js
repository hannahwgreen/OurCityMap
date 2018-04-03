import React from 'react';

const PhotoTextField = props => {
  return(
    <div>
      <div className="form-group">
        <label>{props.label}</label>
        <input
          name={props.name}
          type='text'
          className='form-control'
          value={props.content}
          onChange={props.handlerFunction}
        />
      </div>
    </div>
  )
}

export default PhotoTextField;
